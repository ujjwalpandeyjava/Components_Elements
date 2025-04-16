"use client"

import { useTheme } from '@/contexts/theme-provider';

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
	const { colors, setTheme } = useTheme();
	const themeContext = useTheme();


	return (
		<>
			<div style={{ color: colors.primary }}>
				Context theme color primary
			</div >
			<div style={{ color: themeContext.colors.secondary }}>
				Context theme color secondary
			</div>

			<p>
				Primary: <input type="color" value={colors.primary} onChange={(e) => setTheme({ primary: e.target.value, secondary: colors.secondary })} />
			</p>
			<p>
				Secondary: <input type="color" value={colors.secondary} onChange={(e) => setTheme({ primary: colors.primary, secondary: e.target.value })} />
			</p>
		</>
	)
}

export default Page