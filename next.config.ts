import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/projects",
				destination: "/",
				permanent: false,
			},
		];
	},
};

export default nextConfig;
