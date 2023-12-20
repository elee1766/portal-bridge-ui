import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const MAINNET_RPCS =  {
  rpcs: {
    wormchain: "https://and76cjzpa.execute-api.us-east-2.amazonaws.com/wormchain/",
    solana: "https://wormhole.rpcpool.com/",
    osmosis: "https://and76cjzpa.execute-api.us-east-2.amazonaws.com/osmosis/",
    ethereum: "https://and76cjzpa.execute-api.us-east-2.amazonaws.com/ethereum/",
    sui: "https://and76cjzpa.execute-api.us-east-2.amazonaws.com/sui/",
    aptos: "https://and76cjzpa.execute-api.us-east-2.amazonaws.com/aptos/",
    kujira: "https://and76cjzpa.execute-api.us-east-2.amazonaws.com/kujira/"
  }
}


const PUBLIC_URL = process.env.PUBLIC_URL || ''


// https://vitejs.dev/config/
export default defineConfig({
  base: PUBLIC_URL,
  define: {
    redirects: {},
    navBar: [
      { label: "Home", href: `${PUBLIC_URL}/` },
      { label: "Dashboard", active: true, href: `${PUBLIC_URL}/usdc-rewards` }
    ],
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@wormhole-foundation/wormhole-connect/dist/*',
          dest: 'assets/wormhole-connect/'
        }
      ]
    })
  ],
})
