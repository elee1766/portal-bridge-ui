import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi"
import Taurus from "../quarks/Taurus";


const WormholeLogo = ()=> (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='82'
      height='85'
      fill='none'
      viewBox='0 0 82 85'
    >
      <path
        fill='#fff'
        d='M40.638 84.591c-10.77-.007-21.096-4.464-28.715-12.392C4.304 64.268.017 53.516 0 42.298c.017-11.22 4.304-21.973 11.923-29.902C19.54 4.466 29.868.008 40.638 0c10.77.009 21.096 4.467 28.715 12.396 7.618 7.93 11.906 18.684 11.922 29.902-.016 11.218-4.304 21.972-11.922 29.9-7.619 7.93-17.946 12.386-28.715 12.393zm0-81.335c-9.941.007-19.474 4.122-26.506 11.441-7.033 7.32-10.99 17.246-11.006 27.601.01 10.357 3.966 20.286 11 27.606s16.57 11.431 26.512 11.431 19.478-4.111 26.512-11.431c7.033-7.32 10.99-17.249 11-27.605-.016-10.356-3.974-20.282-11.006-27.602C60.11 7.378 50.579 3.263 40.638 3.257z'
      ></path>
      <path
        fill='#fff'
        d='M45.776 77.898c-8.923-.007-17.478-3.7-23.79-10.27-6.311-6.57-9.863-15.478-9.877-24.773.014-9.294 3.566-18.203 9.877-24.772 6.312-6.57 14.867-10.263 23.79-10.27 8.922.007 17.477 3.7 23.789 10.27 6.311 6.57 9.864 15.478 9.877 24.773-.013 9.294-3.566 18.203-9.877 24.772-6.312 6.57-14.867 10.263-23.79 10.27zm0-67.556c-8.278.007-16.216 3.434-22.071 9.53-5.855 6.095-9.15 14.36-9.163 22.983.014 8.623 3.31 16.887 9.165 22.98 5.855 6.095 13.791 9.521 22.069 9.529 8.277-.008 16.213-3.434 22.068-9.528 5.856-6.094 9.152-14.358 9.165-22.98-.013-8.622-3.31-16.887-9.165-22.98-5.855-6.095-13.791-9.521-22.068-9.529v-.005z'
      ></path>
      <path
        fill='#fff'
        d='M50.912 71.214c-7.075-.006-13.859-2.935-18.864-8.144-5.004-5.209-7.821-12.273-7.832-19.643.01-7.37 2.828-14.434 7.832-19.643 5.005-5.209 11.789-8.137 18.864-8.143 7.075.004 13.86 2.932 18.864 8.142 5.005 5.21 7.822 12.274 7.831 19.644-.01 7.37-2.827 14.434-7.832 19.643-5.005 5.21-11.788 8.138-18.863 8.144zm0-53.766c-6.615.004-12.959 2.742-17.639 7.613-4.68 4.87-7.313 11.475-7.322 18.366.01 6.89 2.645 13.494 7.324 18.363 4.68 4.87 11.022 7.607 17.637 7.611 6.614-.004 12.956-2.741 17.636-7.61 4.68-4.87 7.314-11.474 7.325-18.364-.01-6.89-2.644-13.496-7.323-18.366-4.68-4.871-11.023-7.609-17.638-7.613z'
      ></path>
      <path
        fill='#fff'
        d='M56.048 64.52c-5.227-.004-10.24-2.168-13.937-6.017-3.698-3.849-5.78-9.068-5.788-14.513.007-5.446 2.088-10.667 5.786-14.517 3.698-3.85 8.71-6.015 13.94-6.02 5.227.005 10.24 2.17 13.939 6.02 3.698 3.85 5.778 9.07 5.785 14.517-.008 5.445-2.09 10.664-5.787 14.513-3.698 3.85-8.71 6.013-13.938 6.017zm0-39.98c-4.952.004-9.7 2.054-13.202 5.7-3.503 3.647-5.474 8.591-5.48 13.75.008 5.157 1.979 10.1 5.481 13.746 3.503 3.645 8.25 5.695 13.201 5.699 4.951-.005 9.698-2.054 13.2-5.7 3.503-3.645 5.475-8.588 5.483-13.745-.007-5.159-1.978-10.103-5.48-13.75-3.503-3.646-8.25-5.696-13.203-5.7z'
      ></path>
    </svg>
  );



const ConnectedDashboard = () => {
  return (
    <div>
      hi
    </div>
  )
}


const DisconnectedDashboard= () => {
  const {open} = useWeb3Modal()
  return (
    <div className="grow flex flex-col justify-center items-center">
      <div className="
        flex flex-col justify-center items-center
        pb-8
        pt-8
        ">
        <div className="
          text-white
          text-5xl
          ">Let's build the web of Web3</div>
        <div className="
          text-white text-md
          w-3/5
          pt-5
          pb-8
          "
        >
          The Wormhole Foundation is dedicated to supporting open-source,
          decentralized technologies that securely and seamlessly connect Web3.
        </div>
      </div>
      <div className="flex flex-col items-center gap-4
        bg-black bg-opacity-30 backdrop-blur-lg
        pb-28 pt-24
        w-4/5
        border border-0.5 border-white border-opacity-45
        px-4
        ">
        <div className="pb-8">
          <WormholeLogo />
        </div>
        <div className="text-white text-3xl">Please, connect your wallet</div>
        <div className="flex flex-col pb-8">
          <div className="text-white">We couldn't detect a wallet</div>
          <div className="text-white">Connect a wallet to stake and view your balance</div>
        </div>
        <div className="
          text-white
          border border-white border-0.5 border-opacity-50
          bg-white bg-opacity-15
          text-sm
          px-4 py-2
          hover:cursor-pointer
          "
          onClick={()=>{open()}}
        >Connect Wallet</div>
      </div>
      <div className="
        flex flex-col md:flex-row
        md:items-center gap-4
        bg-black bg-opacity-30 backdrop-blur-lg
        border border-0.5 border-white border-opacity-45
        py-8
        px-8
        justify-between
        -translate-y-12
        w-2/3
        ">
        <div className="
          flex flex-col md:flex-row md:items-center gap-4 md:gap-8
          text-start
          ">
          <Taurus/>
          <div className="text-white text-2xl font-light">How Rewards Work?</div>
        </div>
        <div>
          <div className="flex flex-row items-center">
            <div className="text-white text-sm">Learn More</div>
            <div className="text-white"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const DashboardLayout = () => {
  const {isConnected} = useAccount()
  return (
    <div className="
      grow flex flex-col
      ">
      {isConnected ? <ConnectedDashboard/> : <DisconnectedDashboard/>}
    </div>
  )
}
