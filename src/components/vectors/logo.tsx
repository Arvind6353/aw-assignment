export function Logo(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="true"
			fill="none"
			focusable="false"
			role="img"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M20 6.3c0-.7-.6-1.3-1.4-1.3-.7 0-1.4.6-1.4 1.3 0 .8.7 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4zM9.1 5.2H6.6v.2l4.2 10h.2l1.2-3v-.1l-2.9-7a.2.2 0 00-.2 0zm2.8 0h2.5a.2.2 0 01.2.2l2.9 6.9a.2.2 0 010 .1l-1.3 3H16l-4.2-10 .1-.2zM5.6 15.4h2.5s.1-.1 0-.2L4 5.2h-.2l-1.3 3a.2.2 0 000 .1l3 7a.2.2 0 00.1 0zM1.4 13c.7 0 1.4.6 1.4 1.3 0 .7-.7 1.3-1.4 1.3-.8 0-1.4-.6-1.4-1.3 0-.7.6-1.3 1.4-1.3z"
				fill="currentColor"
			/>
		</svg>
	);
}
