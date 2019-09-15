import Loadable from "@loadable/component"

const LoadableBuyButton = Loadable(() => import("./ShopifyBuyButton"))

export default LoadableBuyButton