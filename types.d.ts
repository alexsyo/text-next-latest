type BigNumber = import('ethers').BigNumber

type OpenSeaNetwork = import('opensea-js').Network

type Collection = {
  name: string
  description: string
  image: string
  address: string
  creator: User 
  featured?: boolean
  assets?: Asset[]
}

type Asset = {
  name: string
  image: string
  address: string
  tokenId: string
  price?: BigNumber
  collection?: Collection
}

type User = {
  name: string
  description: string
  image: string
  background: string
  collections?: Collection[]
}

type MessageType = 'success' | 'error'

type Message = {
  message: string
  severity: MessageType
}

type Currency = {
  name: string
  address: string
  symbol: string
  decimals: number
  chainId: number
  logoURI: string
}

type NetworkData = {
  rpc: string
  openSeaNetwork: OpenSeaNetwork
  users: User[]
  collections: Collection[]
  currencies: Currency[]
}
