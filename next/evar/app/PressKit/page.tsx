import dirData from '@/dirData.json';
import HiddenButton from 'common/components/hiddenButton';
import { NodeData } from 'react-folder-tree';
import 'react-folder-tree/dist/style.css';
import RandomImages from './randomImages';
import RenderFiles from './renderFiles';

export default function PressKit() {
	return <main className="hGrid vPad">
		<div className='s1 e12 ph-s0 ph-e6 ph-hUnitMarg allRoundBig ph-allRoundBigResp bg-l2 Container pulsingShadow '>
			<div className="Pad ph-PadResp hGrid">
				<RenderFiles className='s0 e6 ph-e6' files={
					mapTree(
						whereTree(dirData,
							node => !node.name.startsWith("README") && !node.name.startsWith(".")
						) as NodeData,
						node => ({ ...node, checked: 0, isOpen: !node.children?.length })
					)} />
				<RandomImages className='s7 e12 ph-s0 ph-e6 ph-tPadResp' />
				<HiddenButton
					className='s0 e6 ph-s1 ph-e5 ph-hCenter hShrink tAltMarg'
					style={{padding: "15px"}}
					download="PressKit" href='./PressKit.zip'>
					Download PressKit
				</HiddenButton>
			</div>
		</div>
	</main>
}

/**
 * Recursively filters a tree structure based on a predicate function.
 * A node is included in the new tree if the predicate returns true for it,
 * or if any of its children match the predicate.
 * @param tree - The tree object to filter.
 * @param predicate - A function that returns a boolean, taking a node as its argument.
 * @returns A new, filtered tree object, or null if the node and all children are filtered out.
 */
function whereTree(tree: NodeData, predicate: (node: NodeData) => boolean): NodeData | null {
	// Recursively filter the children first.
	const filteredChildren = tree.children?.map(child => whereTree(child, predicate))
		.filter((child): child is NodeData => child !== null); // Remove any nulls from the result with a type guard.

	// If the current node matches the predicate, or if any of its children matched,
	// return a new tree node with the filtered children.
	if (predicate(tree) || !!filteredChildren?.length) {
		return { ...tree, children: filteredChildren };
	}

	// If the node and all its children are filtered out, return null.
	return null;
}
/**
 * Recursively maps a function over a tree structure, returning a new tree with transformed nodes.
 * @param tree - The tree object to map.
 * @param mapper - A function that takes a node and returns a new, transformed node.
 * @returns A new tree object with the mapped nodes.
 */
function mapTree(tree: NodeData, mapper: (node: NodeData) => NodeData): NodeData {
	// First, apply the mapper function to the current node.
	const mappedNode = mapper(tree);

	// Then, recursively map over the children.
	const mappedChildren = mappedNode.children?.map(child => mapTree(child, mapper));

	// Return the new node with its transformed children.
	return { ...mappedNode, children: mappedChildren };
}