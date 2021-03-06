﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
module table {
	/**
	 * FILE: 鱼表.xlsx SHEET: Sheet1
	 */
	export class TableFishConfig {
		/**
		 * ID
		 */
		sign: number;
		/**
		 * 碰撞范围
		 */
		colliderAry: TableFishConfig.ColliderAryItem[];
		/**
		 * 影片剪辑组
		 */
		movieClipAry: TableFishConfig.MovieClipAryItem[];
		/**
		 * 速度
		 */
		speed: number;
		/**
		 * 杀死鱼的赔率
		 */
		killOdds: number;
		/**
		 * 延迟出场时间
		 */
		spawnTimeout: number;
		/**
		 * 是否镜像
		 */
		isMirror: boolean;
		/**
		 * 锚点
		 */
		anchorOffset: TableFishConfig.AnchorOffsetItem;
		/**
		 * 是否精确碰撞
		 */
		isAccurateCollider: boolean;
		/**
		 * 放大倍数
		 */
		fishScale: number;
		/**
		 * 鱼类型
		 */
		fishType: number;
		/**
		 * 路径列表
		 */
		pathList: string[];

		GetType(): string { return 'table.TableFishConfig'; }
	}
	export module TableFishConfig {
		export class ColliderAryItem {
			posX: number;
			posY: number;
			radius: number;
		}
	}
	export module TableFishConfig {
		export class MovieClipAryItem {
			keyName: string;
			groupName: string;
			actionName: string;
			frameRate: number;
		}
	}
	export module TableFishConfig {
		/**
		 * 锚点
		 */
		export class AnchorOffsetItem {
			x: number;
			y: number;
		}
	}
}
