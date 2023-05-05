(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{352:function(t,s,a){t.exports=a.p+"assets/img/索引分类.4ad99aac.png"},353:function(t,s,a){t.exports=a.p+"assets/img/索引分类原理.a5b46300.png"},424:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"mysql-中索引语法以及分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-中索引语法以及分类"}},[t._v("#")]),t._v(" mysql 中索引语法以及分类")]),t._v(" "),s("h4",{attrs:{id:"_1-索引概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-索引概述"}},[t._v("#")]),t._v(" 1. 索引概述")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("索引是帮助 MySQL 高效获取数据的数据结构（有序）。\n在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式引用（指向）数据，这样就可以在这些数据结构上实现高级查询算法，这种数据结构就是索引。\n\n---------------------------------\n|   索引是一种数据结构           \n|   索引要短                     \n|   索引不是越多越好             \n|   索引可以提高查询效率         \n---------------------------------\n优点：\n    提高数据检索效率，降低数据库的IO成本\n    通过索引列对数据进行排序，降低数据排序的成本，降低CPU的消耗\n\n缺点：\n    索引列也是要占用空间的\n    索引大大提高了查询效率，但降低了更新的速度，比如 INSERT、UPDATE、DELETE\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("h4",{attrs:{id:"_2-索引分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-索引分类"}},[t._v("#")]),t._v(" 2. 索引分类")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("分类")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("含义")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("特点")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("关键字")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("主键索引")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("针对于表中主键创建的索引")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("默认自动创建，只能有一个")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("PRIMARY")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("唯一索引")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("避免同一个表中某数据列中的值重复")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以有多个")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("UNIQUE")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("常规索引")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("快速定位特定数据")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以有多个")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("全文索引")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("全文索引查找的是文本中的关键词，而不是比较索引中的值")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以有多个")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("FULLTEXT")])])])]),t._v(" "),s("ul",[s("li",[t._v("在 InnoDB 存储引擎中，根据索引的存储形式，又可以分为以下两种：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("分类")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("含义")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("特点")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("聚集索引(Clustered Index)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("将数据存储与索引放一块，索引结构的叶子节点保存了行数据")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("必须有，而且只有一个")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("二级索引(Secondary Index)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("将数据与索引分开存储，索引结构的叶子节点关联的是对应的主键")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])]),t._v(" "),s("ul",[s("li",[t._v("聚集索引 / 二级索引(非聚集索引)")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(352),alt:"image"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(353),alt:"image"}})]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 1) 根据name的索引查出聚集索引id")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 2) 之后需要回表根据id查出所需要的内容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" $table_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arm"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[t._v("聚集索引选取规则：")])]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1) 如果存在主键，主键索引就是聚集索引\n2) 如果不存在主键，将使用第一个唯一(UNIQUE)索引作为聚集索引\n3) 如果表没有主键或没有合适的唯一索引，则 InnoDB 会自动生成一个 rowid 作为隐藏的聚集索引\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h4",{attrs:{id:"_3-索引语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-索引语法"}},[t._v("#")]),t._v(" 3. 索引语法")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 1) 创建索引")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" FULLTEXT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" $index_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" $table_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$index_col_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 2) 查看索引")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" $table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 3) 删除索引")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" $index_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" $table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 4) case")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- name字段为姓名字段，该字段的值可能会重复，为该字段创建索引")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" idx_user_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" tb_user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- phone手机号字段的值非空，且唯一，为该字段创建唯一索引")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unique")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" idx_user_phone "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" tb_user "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("phone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 为profession, age, status创建联合索引")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" idx_user_pro_age_stat "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" tb_user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("profession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 为email建立合适的索引来提升查询效率")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" idx_user_email "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" tb_user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 删除索引")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("drop")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" idx_user_email "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" tb_user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br")])]),s("h4",{attrs:{id:"_4-索引设计原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-索引设计原则"}},[t._v("#")]),t._v(" 4. 索引设计原则")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1) 对于数据量较大，且查询比较频繁的表建立索引\n\n2) 针对于常作为查询条件（where）、排序（order by）、分组（group by）操作的字段建立索引\n\n3) 尽量选择区分度高的列作为索引，尽量建立唯一索引，区分度越高，使用索引的效率越高\n\n4) 如果是字符串类型的字段，字段长度较长，可以针对于字段的特点，建立前缀索引\n\n5) 尽量使用联合索引，减少单列索引，查询时，联合索引很多时候可以覆盖索引，节省存储空间，避免回表，提高查询效率\n\n6) 要控制索引的数量，索引并不是多多益善，索引越多，维护索引结构的代价就越大，会影响增删改的效率\n\n7) 如果索引列不能存储NULL值，请在创建表时使用NOT NULL约束它。当优化器知道每列是否包含NULL值时，它可以更好地确定哪个索引最有效地用于查询\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);