"use client";

import path from "path";
import { useEffect, useRef, useState } from "react";
import { FolderTreeProps, NodeData } from "react-folder-tree";
import 'react-folder-tree/dist/style.css';

interface FolderTreeImport {
	default: React.FunctionComponent<FolderTreeProps>;
};
type OnChange = (state: NodeData, event: unknown) => void;
type OnNameClick = (opts: {
	defaultOnClick: () => void;
	nodeData: NodeData;
}) => void;

export default function RenderFiles(props: {
	files: NodeData,
	className: string | undefined,
}) {
	const [loadedFolderTree, setloadedFolderTree] = useState<FolderTreeImport | null>(null);
	const [treeState, setTreeState] = useState(props.files);
	const updated = useRef<boolean>(false);

	useEffect(() => {
		const initTerminal = async () => {
			setloadedFolderTree(await import('react-folder-tree'));
		}
		initTerminal();
	}, [])

	const onTreeStateChange: OnChange = (state, event) => {
		console.log(state, event);

		if (updated.current) return;
		if (treeState == state) return;
		setTreeState(state);

		updated.current = true;
	}
	const onNameClick: OnNameClick = (opts) => {
		// console.log(opts.nodeData);
		// console.log(treeState);

		const found = findPath(treeState, n => n.children?.length == 0 && n._id == opts.nodeData._id);
		console.log(found);

		(window.location as unknown as string) = "./" + found;
	};

	return <main className={props.className}>
		{loadedFolderTree &&
			<loadedFolderTree.default
				data={treeState}
				readOnly
				showCheckbox={false}
				onNameClick={onNameClick}
				onChange={onTreeStateChange}
				// iconComponents={({ onClick: defaultOnClick, nodeData }) => {
				// 	if (nodeData.children.length == 0) {
				// 		// is file:
				// 		// return
				// 	}
				// }}
			/>
		}
	</main>;
}

/**
 * Recursively searches a tree for the first node that satisfies a predicate and
 * returns the full path to that node.
 * @param tree - The tree object to search.
 * @param predicate - A function that returns a boolean, taking a node as its argument.
 * @returns The full path (as a string) to the first matching node, or null if no node is found.
 */
function findPath(tree: NodeData, predicate: (node: NodeData) => boolean): string | null {
	/**
	 * Internal recursive helper function.
	 * @param currentNode - The current node in the traversal.
	 * @param currentPath - The path built up to the current node.
	 */
	function _findPath(currentNode: NodeData, currentPath: string): string | null {
		// Check if the current node satisfies the predicate.
		if (predicate(currentNode)) {
			return currentPath;
		}

		// Recursively search the children.
		for (const child of currentNode.children ?? []) {
			const childPath = path.join(currentPath, child.name);
			const result = _findPath(child, childPath);
			// If a result is found in a child's branch, return it immediately.
			if (result) {
				return result;
			}
		}

		// If no matching node is found in this branch, return null.
		return null;
	}

	// Start the search from the root of the tree with its initial name as the path.
	return _findPath(tree, tree.name);
}