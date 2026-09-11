const ASSET_ORIGIN = "https://san-antonio-dance-connect.lovable.app";

export function assetUrl(path: string) {
  return path.startsWith("/") ? `${ASSET_ORIGIN}${path}` : path;
}