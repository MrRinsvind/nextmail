import React, { Component } from 'react'


import BlockeditorBoard from '../editor/BlockeditorBoard'
import nodesMap, { ROOT_NODE,  } from '../editor/nodes'
import { makeTree, generateDefaultSettings } from '../editor/utils/helpers'


const rootNode = {
  uuid: '0',
  order: 0,
  kind: ROOT_NODE,
  nodes: [],
  settings: generateDefaultSettings(nodesMap[ROOT_NODE]),
}

export class BlockeditorContainer extends Component {

  static async getInitialProps({ query }) {
    console.log('SLUG', query)
    return {}
  }

  constructor(props) {
    super(props)

    this.state = {
      nodes: [rootNode, ...[
        {
          "uuid": "8586daf0-76d5-11e9-8cea-cb4e0a110fe3",
          "kind": 2,
          "settings": {
            "align": "full width",
            "spacing": 0,
            "backgroundColor": "",
            "url": ""
          },
          "nodes": [
            {
              "uuid": "85870200-76d5-11e9-8cea-cb4e0a110fe3",
              "kind": 4,
              "nodes": [],
              "puuid": "8586daf0-76d5-11e9-8cea-cb4e0a110fe3",
              "order": 0
            },
            {
              "uuid": "85870201-76d5-11e9-8cea-cb4e0a110fe3",
              "kind": 4,
              "nodes": [
                {
                  "uuid": "88f1f260-76d5-11e9-8cea-cb4e0a110fe3",
                  "kind": 7,
                  "settings": {
                    "social": [
                      {
                        "social": "facebook",
                        "url": "test.com",
                        "label": "Facebook",
                        "value": {
                          "social": "facebook",
                          "url": "test.com"
                        }
                      }
                    ],
                    "align": "center"
                  },
                  "nodes": [],
                  "puuid": "85870201-76d5-11e9-8cea-cb4e0a110fe3",
                  "order": 0
                }
              ],
              "puuid": "8586daf0-76d5-11e9-8cea-cb4e0a110fe3",
              "order": 1
            },
            {
              "uuid": "85870202-76d5-11e9-8cea-cb4e0a110fe3",
              "kind": 4,
              "nodes": [],
              "puuid": "8586daf0-76d5-11e9-8cea-cb4e0a110fe3",
              "order": 2
            }
          ],
          "puuid": "0",
          "order": 0
        },
        {
          "uuid": "85870200-76d5-11e9-8cea-cb4e0a110fe3",
          "kind": 4,
          "nodes": [],
          "puuid": "8586daf0-76d5-11e9-8cea-cb4e0a110fe3",
          "order": 0
        },
        {
          "uuid": "85870201-76d5-11e9-8cea-cb4e0a110fe3",
          "kind": 4,
          "nodes": [
            {
              "uuid": "88f1f260-76d5-11e9-8cea-cb4e0a110fe3",
              "kind": 7,
              "settings": {
                "social": [
                  {
                    "social": "facebook",
                    "url": "test.com",
                    "label": "Facebook",
                    "value": {
                      "social": "facebook",
                      "url": "test.com"
                    }
                  }
                ],
                "align": "center"
              },
              "nodes": [],
              "puuid": "85870201-76d5-11e9-8cea-cb4e0a110fe3",
              "order": 0
            }
          ],
          "puuid": "8586daf0-76d5-11e9-8cea-cb4e0a110fe3",
          "order": 1
        },
        {
          "uuid": "85870202-76d5-11e9-8cea-cb4e0a110fe3",
          "kind": 4,
          "nodes": [],
          "puuid": "8586daf0-76d5-11e9-8cea-cb4e0a110fe3",
          "order": 2
        },
        {
          "uuid": "88f1f260-76d5-11e9-8cea-cb4e0a110fe3",
          "kind": 7,
          "settings": {
            "social": [
              {
                "social": "facebook",
                "url": "test.com",
                "label": "Facebook",
                "value": {
                  "social": "facebook",
                  "url": "test.com"
                }
              }
            ],
            "align": "center"
          },
          "nodes": [],
          "puuid": "85870201-76d5-11e9-8cea-cb4e0a110fe3",
          "order": 0
        }
      ]],
      subject: 'New subject',
    }
  }

  render() {
    return (
      <div className="editor-container">
        <BlockeditorBoard node={makeTree(this.state.nodes)} onDelete={this.onDelete} onDuplicate={this.onDuplicate} isLoading={this.state.isLoading} />
      </div>
    )
  }
}

export default BlockeditorContainer
