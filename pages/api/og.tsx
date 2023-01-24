import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const { ip, geo } = req;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(to left, rgb(219, 234, 254), rgb(147, 197, 253))",
        }}
      >
        <div
          style={{
            fontWeight: 200,
          }}
        >
          Rewind Table
        </div>

        <svg
          width="235"
          height="235"
          viewBox="0 0 235 235"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_103_104)">
            <path
              d="M23.3492 133.751C12.1833 126.219 12.1833 109.781 23.3493 102.249L112.875 41.8562C125.494 33.3433 142.5 42.3851 142.5 57.6073L142.5 178.393C142.5 193.615 125.494 202.657 112.874 194.144L23.3492 133.751Z"
              fill="#2563EB"
            />
            <path
              d="M92.3492 133.751C81.1833 126.219 81.1833 109.781 92.3493 102.249L181.875 41.8562C194.494 33.3433 211.5 42.3851 211.5 57.6073L211.5 178.393C211.5 193.615 194.494 202.657 181.874 194.144L92.3492 133.751Z"
              fill="#6B7280"
            />
          </g>
          <defs>
            <clipPath id="clip0_103_104">
              <rect width="235" height="235" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
