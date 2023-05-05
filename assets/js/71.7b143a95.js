(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{460:function(e,r,t){"use strict";t.r(r);var a=t(10),o=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"kafka"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kafka"}},[e._v("#")]),e._v(" Kafka")]),e._v(" "),r("h3",{attrs:{id:"_1-如何解决生产者重复发送消息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何解决生产者重复发送消息"}},[e._v("#")]),e._v(" 1. 如何解决生产者重复发送消息？")]),e._v(" "),r("blockquote",[r("p",[e._v("要启动kafka的幂等性，无需修改代码，默认为关闭，需要修改配置文件:enable.idempotence=true 同时要求 ack=all 且 retries>1。")])]),e._v(" "),r("p",[r("strong",[e._v("幂等原理：")])]),e._v(" "),r("blockquote",[r("p",[e._v("每个producer有一个producer id，服务端会通过这个id关联记录每个producer的状态，每个producer的每条消息会带上一个递增的sequence，服务端会记录每个producer对应的当前最大sequence，producerId + sequence ，如果"),r("strong",[e._v("新的消息带上的sequence不大于当前的最大sequence就拒绝这条消息")]),e._v("，如果消息落盘会同时更新最大sequence，这个时候重发的消息会被服务端拒掉从而避免消息重复。该配置同样应用于kafka事务中。")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("ack=0，不重试\nproducer发送消息完，不管结果了，如果发送失败也就丢失了。")])]),e._v(" "),r("li",[r("p",[e._v("ack=1，leader crash\nproducer发送消息完，只等待lead写入成功就返回了，leader crash了，这时follower没来及同步，消息丢失。")])]),e._v(" "),r("li",[r("p",[e._v("ack=all / -1\nproducer发送消息完，等待ollower同步完再返回，如果异常则重试。")])]),e._v(" "),r("li",[r("p",[e._v("失败的offset单独记录\nproducer发送消息，会自动重试，遇到不可恢复异常会抛出，这时可以捕获异常记录到数据库或缓存，进行单独处理。")])])]),e._v(" "),r("h3",{attrs:{id:"_2-消费者重复消费数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-消费者重复消费数据"}},[e._v("#")]),e._v(" 2. 消费者重复消费数据？")]),e._v(" "),r("blockquote",[r("p",[e._v("原因: 数据消费完没有及时提交offset到broke。\n消息消费端在消费过程中挂掉没有及时提交offset到broke，另一个消费端启动拿之前记录的offset开始消费，由于offset的滞后性可能会导致新启动的客户端有少量重复消费。")])]),e._v(" "),r("p",[r("strong",[e._v("解决方案：")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("取消自动自动提交\n每次消费完或者程序退出时手动提交。这可能也没法保证一条重复。")])]),e._v(" "),r("li",[r("p",[e._v("下游做幂等\n一般的解决方案是让下游做幂等或者尽量每消费一条消息都记录offset，对于少数严格的场景可能需要把offset或唯一ID,例如订单ID和下游状态更新放在同一个数据库里面做事务来保证精确的一次更新或者在下游数据表里面同时记录消费offset，然后更新下游数据的时候用消费位点做乐观锁拒绝掉旧位点的数据更新。")])])])])}),[],!1,null,null,null);r.default=o.exports}}]);