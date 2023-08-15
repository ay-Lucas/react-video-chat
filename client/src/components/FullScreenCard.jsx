export function FullScreenCard({ children }) {
	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="max-w-md w-full">{children}</div>
		</div>
	);
}
