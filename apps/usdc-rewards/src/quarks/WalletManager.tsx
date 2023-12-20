import { useWeb3Modal } from "@web3modal/wagmi/react";
import { IoSwapHorizontalOutline } from "react-icons/io5"
import { useAccount, useEnsName} from "wagmi"
import makeBlockie from 'ethereum-blockies-base64'
import { useMemo } from "react";

const LightningIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
    >
      <circle cx='8' cy='8' r='7.25' fill='#fff'></circle>
      <path
        fill='#1F2554'
        d='M11.682 7.518L6.486 12.38a.414.414 0 01-.284.108.422.422 0 01-.212-.056.363.363 0 01-.168-.438l1.023-2.872H4.603a.402.402 0 01-.364-.217.355.355 0 01.06-.4l4.397-4.862a.419.419 0 01.48-.093c.167.076.257.249.216.419L8.7 6.879H11.4a.4.4 0 01.367.231c.063.14.03.3-.084.408z'
      ></path>
    </svg>
  );
}

const ConnectedWalletManager = () => {
  const {open} = useWeb3Modal()
  const {address} = useAccount()
  const {data: ensName} = useEnsName({address, chainId: 1})
  const blockie = useMemo(() => {
    if (address) {
      return makeBlockie(address)
    }
    return undefined
  }, [address])
  return <div className="
    flex flex-row gap-1
    ">
    <div className="
      flex flex-row items-center gap-2 px-3 py-1
      border border-0.5 border-white border-opacity-25
      ">
      {
      // <div className="text-white text-sm">SWITCH CHAINS</div>
      }
      <IoSwapHorizontalOutline className="w-5 h-5 stroke-white stroke-1"/>
    </div>
    <div className="
      flex flex-row items-center gap-2 px-3 py-1
      border border-0.5 border-white border-opacity-25
      text-white
      hover:cursor-pointer
      "
      onClick={()=>{open()}}
    >
      <img className="w-4 h-4 rounded-full" src={blockie} />{' '}
      <div className="text-sm">{ensName ? truncateEns(ensName) : (address ? truncateAddr(address): "")}</div>
    </div>
  </div>
}
const truncateEns = (x?:string)=> {
  if(x) {
    if(x.length > 8) {
      return x.slice(0,8) + "..."
    }
    return x
  }
  return ""
}
const truncateAddr = (x?:string)=> {
  if(x) {
    if(x.length > 10) {
      return x.slice(0,4) + "..." + x.slice(-4)
    }
    return x
  }
  return ""
}


const DisconnectedWalletManager = () => {
  const {open} = useWeb3Modal()
  return (
    <div className="
      flex flex-row items-center gap-2 px-3 py-2
      border border-0.5 border-white
      bg-white bg-opacity-15
      hover:cursor-pointer
      "
      onClick={()=>{
      open()
    }}
    >
      <LightningIcon/>
      <div className="text-white text-sm">
        Connect Wallet
      </div>
    </div>
  )
}


export const WalletManager = () => {
  const {isConnected} = useAccount()
  return <>
    {isConnected ? <ConnectedWalletManager/> : <DisconnectedWalletManager/>}
  </>

}
