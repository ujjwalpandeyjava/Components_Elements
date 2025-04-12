"use client"

import { useTheme } from '@/components/theme-provider';

/**
 * Context can only be user in this way:
 * 
 * - Create a hook
 * - Wrap the layout with its provider
 * - Use the hook as required (only on the client components)
 * - In this way the server components will keep its server integrity and will not leak private data.
 * 
 * @returns 
 */

const Page = () => {
	const context = useTheme();


	return (
		<div style={{ color: context.colors.primary }}>Context Router</div >
	)
}

export default Page