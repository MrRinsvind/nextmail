import filter from 'lodash/filter'
import orderBy from 'lodash/orderBy'
import find from 'lodash/find'
import uuidv1 from 'uuid/v1'

import { getDefaultDate } from './formatDate'
import { THREE_COLUMNS_NODE, TWO_COLUMNS_NODE, ONE_COLUMNS_NODE, CELL_NODE, DIVIDER_NODE } from 'components/Pages/Blockeditor/nodes'


export function makeTree(list) {
  if(!list) return
  let root = find(list, {uuid: '0'})

  list = filter(list, (i) => i.uuid !== '0')

  // prepare
  list.forEach((item, index) => {
    item.puuid = item.puuid || '0'
    item.nodes = []
    item.order = item.order || 0
  })

  // make childs
  list.forEach(item => {
    item.nodes = orderBy(filter(list, {puuid: item.uuid}), 'order')

    // finally fix order
    item.nodes.forEach((item, index) => {
      item.order = index
    })
  })

  // get top level nodes
  list = orderBy(filter(list, {puuid: '0'}), 'order')

  // finally fix order
  list.forEach((item, index) => {
    item.order = index
  })

  root.nodes = list
  return root
}

export function generateCells(node) {
  if(!node) return []
  switch(node.kind) {
    case ONE_COLUMNS_NODE:
      return [
        {
          uuid: uuidv1(),
          kind: CELL_NODE,
          nodes: [],
          puuid: node.uuid,
        },
      ]
    case TWO_COLUMNS_NODE:
      return [
        {
          uuid: uuidv1(),
          kind: CELL_NODE,
          nodes: [],
          puuid: node.uuid,
        },
        {
          uuid: uuidv1(),
          kind: CELL_NODE,
          nodes: [],
          puuid: node.uuid,
        },
      ]
    case THREE_COLUMNS_NODE:
      return [
        {
          uuid: uuidv1(),
          kind: CELL_NODE,
          nodes: [],
          puuid: node.uuid,
        },
        {
          uuid: uuidv1(),
          kind: CELL_NODE,
          nodes: [],
          puuid: node.uuid,
        },
        {
          uuid: uuidv1(),
          kind: CELL_NODE,
          nodes: [],
          puuid: node.uuid,
        },
      ]
  }
}

export function flattenDeep(nodes, puuid, isNew) {
  return nodes.reduce((acc, val) => {
    const uuid = isNew ? uuidv1() : val.uuid
    if(Array.isArray(val.nodes) && val.nodes.length) {
      return [...acc, { ...val, uuid: uuid, puuid: puuid || val.puuid }, ...flattenDeep(val.nodes, uuid, isNew)]
    } else {
      return [...acc, { ...val, uuid: uuid, puuid: puuid || val.puuid }]
    }
  }, [])
}

export function generateDefaultSettings(config = {}) {
  if(!config.settings) return
  let settings = {}
  config.settings.forEach(item => settings[item.name] = item.default)
  return settings
}
