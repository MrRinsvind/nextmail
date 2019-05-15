import RootNode from './components/RootNode'
import ThreeColumnsNode from './components/ThreeColumnsNode'
import TwoColumnsNode from './components/TwoColumnsNode'
import OneColumnsNode from './components/OneColumnsNode'
import TextNode from './components/TextNode'
import CellNode from './components/CellNode'
import ImageNode from './components/ImageNode'
import ButtonNode from './components/ButtonNode'
import ShareNode from './components/ShareNode'
import FollowNode from './components/FollowNode'
import SpacingNode from './components/SpacingNode'
import DividerNode from './components/DividerNode'

//Configs
import buttonConfig from './configs/button.config.json'
import cellConfig from './configs/cell.config.json'
import columnConfig from './configs/column.config.json'
import dividerConfig from './configs/divider.config.json'
import imageConfig from './configs/image.config.json'
import oneColumn from './configs/one-column.config.json'
import rootConfig from './configs/root.config'
import shareConfig from './configs/share.config.json'
import followConfig from './configs/follow.config.json'
import spacingConfig from './configs/spacing.config.json'
import textConfig from './configs/text.config.json'
import threeColumns from './configs/three-columns.config.json'
import twoColumns from './configs/two-columns.config.json'


export const ROOT_NODE = 1
export const THREE_COLUMNS_NODE = 2
export const TEXT_NODE = 3
export const CELL_NODE = 4
export const IMAGE_NODE = 5
export const BUTTON_NODE = 6
export const SHARE_NODE = 7
export const FOLLOW_NODE = 8
export const SPACING_NODE = 9
export const DIVIDER_NODE = 10
export const TWO_COLUMNS_NODE = 11
export const ONE_COLUMNS_NODE = 12

const nodesMap = {
  [ROOT_NODE]: {
    kind: ROOT_NODE,
    ...rootConfig,
    component: RootNode,
  },
  [THREE_COLUMNS_NODE]: {
    kind: THREE_COLUMNS_NODE,
    ...threeColumns,
    component:  ThreeColumnsNode,
  },
  [TEXT_NODE]: {
    kind: TEXT_NODE,
    ...textConfig,
    component:  TextNode,
  },
  [CELL_NODE]: {
    kind: CELL_NODE,
    ...cellConfig,
    component:  CellNode,
  },
  [IMAGE_NODE]: {
    kind: IMAGE_NODE,
    ...imageConfig,
    component:  ImageNode,
  },
  [BUTTON_NODE]: {
    kind: BUTTON_NODE,
    ...buttonConfig,
    component:  ButtonNode,
  },
  [SHARE_NODE]: {
    kind: SHARE_NODE,
    ...shareConfig,
    component:  ShareNode,
  },
  [FOLLOW_NODE]: {
    kind: FOLLOW_NODE,
    ...followConfig,
    component: FollowNode,
  },
  [SPACING_NODE]: {
    kind: SPACING_NODE,
    ...spacingConfig,
    component:  SpacingNode,
  },
  [DIVIDER_NODE]: {
    kind: DIVIDER_NODE,
    ...dividerConfig,
    component:  DividerNode,
  },
  [TWO_COLUMNS_NODE]: {
    kind: TWO_COLUMNS_NODE,
    ...twoColumns,
    component:  TwoColumnsNode,
  },
  [ONE_COLUMNS_NODE]: {
    kind: ONE_COLUMNS_NODE,
    ...oneColumn,
    component:  OneColumnsNode,
  },
}

export default nodesMap
