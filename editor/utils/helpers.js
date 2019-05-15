import filter from 'lodash/filter'
import orderBy from 'lodash/orderBy'
import isEmpty from 'lodash/isEmpty'
import range from 'lodash/range'
import find from 'lodash/find'
import uuidv1 from 'uuid/v1'


import { THREE_COLUMNS_NODE, TWO_COLUMNS_NODE, ONE_COLUMNS_NODE, CELL_NODE, DIVIDER_NODE } from '../nodes'


export function generateAttributes(data, values) {
  let obj = {}
  if (Array.isArray(data) && !isEmpty(data)) {
    data.forEach(i => {
      if(values && values.some(attr => attr === i.code)) {
        obj[i.code] = true
      } else {
        obj[i.code] = false
      }
    })
  }

  return obj
}

export function generateListOptions(data) {
  if (!Array.isArray(data) || isEmpty(data)) return []
  return data.map(i => ({ value: i.hash, label: i.name }))
}

export function getColumnsOptions(e) {
  if(!e) return []
  const keys = getColumnsKeys(e)
  return Object.entries(keys[0]).map(([key, value]) => ({ value: key, label: value }))
}

export function getColumnsKeys(e) {
  if(!e) return {}
  const paragraph = e.split(/\n/g)
  return paragraph.map(line => {
    const array = line.split(/[,\;]/)
    const obj = {}
    array.forEach((i, index) => {
      obj[`field${index}`] = i
    })

    return obj
  })
}

export function formatSendAfter(count) {
  if(!count || (!count.days && !count.hours)) return 'Immediately'
  let days = count.days ? count.days + ' days' : ''
  let hours = count.hours? count.hours + ' hours': ''
  return `${days} ${hours}`.trim()
}

export function generateHours(hours = 24) {
  return range(hours).map(value => ({ value, label: value }))
}

export function getStatus(data, slug) {
  if (!data || !data.length) return
  return data.find(i => i.slug === slug).status
}

export function generateListOptionsObject(data) {
  if (!Array.isArray(data) || isEmpty(data)) return []
  return data.map(i => ({ value: { hash: i.hash, name: i.name }, label: i.name }))
}

export function generateSenderOptions(data, withId) {
  if (!Array.isArray(data) || isEmpty(data)) return []
  return data.map(i => ({ value: withId ? i.id : `${i.name}, ${i.email}`, label: `${i.name}, ${i.email}` }))
}


export function cutString(text = '', quantity) {
  if(text.length > quantity) {
    return `${text.substring(0, quantity)}...`
  }

  return text
}

export function getCheckedLists(objLists) {
  const keys = Object.keys(objLists);
  return keys.filter(function(key) {
    return objLists[key]
  })
}


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

export function generateGlobalAndMainSettings(kind, main = {}, global = {}) {
  switch(kind) {
    case DIVIDER_NODE:
    return {
      height: main.height || global.dividerHeight,
      style: main.style || global.dividerStyle,
      color: main.color || global.dividerColor,
    }

    default:
    return { ...global, ...main }
  }
}
