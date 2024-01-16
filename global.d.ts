/**
 * declare of environment variables
 */
declare namespace NodeJS {
  interface ProcessEnv {
    readonly THIRDWEB_CLIENT_ID: string;
    readonly THIRDWEB_CLIENT_SECRET: string;
    readonly ERC721_CONTRACT_ADDRESS: string;
    readonly TZ: string;
  }
}
