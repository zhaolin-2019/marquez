// Copyright 2018-2023 contributors to the Marquez project
// SPDX-License-Identifier: Apache-2.0

export const DAGRE_CONFIG = {
  rankdir: 'LR',//等级节点的方向（TB,BT,LR,RL）
  marginx: 140,//图形左右边缘的距离
  marginy: 40,//图形上下边缘的距离
  align: 'UL',//节点对齐方式(UL,UR,DL,DR)
  ranker: 'network-simplex',//在输入的图像中, 为每个节点分配排名的算法类型. 可选值: network-simplex, tight-tree, longest-path
  edgesep: 60,//在水平方向上, 线段间的距离
  ranksep: 140//每个层级间的距离
}

export const NODE_SIZE = 0

export const INITIAL_TRANSFORM = {
  scaleX: 1,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  skewX: 0,
  skewY: 0
}
