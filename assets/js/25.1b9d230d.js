(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{376:function(t,_,v){t.exports=v.p+"assets/img/粘包.1e5885b8.png"},444:function(t,_,v){"use strict";v.r(_);var e=v(10),s=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http-https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-https"}},[t._v("#")]),t._v(" Http / Https")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://blog.csdn.net/xiayun1995/article/details/82380819",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP数据传输详解"),_("OutboundLink")],1)]),t._v(" "),_("blockquote",[_("p",[t._v("HTTP 协议一般指 HTTP（超文本传输协议）。")]),t._v(" "),_("p",[t._v("超文本传输协议（英语：HyperText Transfer Protocol，缩写：HTTP）是一种用于分布式、协作式和超媒体信息系统的应用层协议，是因特网上应用最为广泛的一种网络传输协议，所有的 WWW 文件都必须遵守这个标准。")]),t._v(" "),_("p",[t._v("HTTP 是为 Web 浏览器与 Web 服务器之间的通信而设计的，但也可以用于其他目的。")]),t._v(" "),_("p",[t._v("HTTP 是一个基于 TCP/IP 通信协议来传递数据的（HTML 文件、图片文件、查询结果等）")])]),t._v(" "),_("h2",{attrs:{id:"_1-http"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-http"}},[t._v("#")]),t._v(" 1.  HTTP")]),t._v(" "),_("h3",{attrs:{id:"_1-1-http协议的特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-http协议的特点"}},[t._v("#")]),t._v(" 1.1 http协议的特点")]),t._v(" "),_("blockquote",[_("p",[t._v("1）HTTP协议是无状态的\n就是说每次HTTP请求都是独立的，任何两个请求之间没有什么必然的联系。但是在实际应用当中并不是完全这样的，引入了Cookie和Session机制来关联请求。")])]),t._v(" "),_("blockquote",[_("p",[t._v("2）多次HTTP请求\n在客户端请求网页时多数情况下并不是一次请求就能成功的，服务端首先是响应HTML页面，然后浏览器收到响应之后发现HTML页面还引用了其他的资源，例如，CSS，JS文件，图片等等，还会自动发送HTTP请求这些需要的资源。现在的HTTP版本支持管道机制，可以同时请求和响应多个请求，大大提高了效率。")]),t._v(" "),_("p",[t._v("3）基于TCP协议\nHTTP协议目的是规定客户端和服务端数据传输的格式和数据交互行为，并不负责数据传输的细节。底层是基于TCP实现的。现在使用的版本当中是默认持久连接的，也就是多次HTTP请求使用一个TCP连接。")])]),t._v(" "),_("h3",{attrs:{id:"_1-2-http-协议报文组成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-http-协议报文组成"}},[t._v("#")]),t._v(" 1.2 http 协议报文组成")]),t._v(" "),_("blockquote",[_("p",[t._v("HTTP报文分为请求报文和响应报文\n报文由三个部分组成，即"),_("strong",[t._v("开始行、首部行和实体主体")])])]),t._v(" "),_("ol",[_("li",[t._v("请求报文\n请求报文的开始行就是请求行，所以请求报文就是由"),_("strong",[t._v("请求行、请求头、内容实体")]),t._v("组成的，注意，每一行的末尾都有回车和换行，在内容实体和请求头之间另有一个空行。其中请求行指定的是请求方法、请求URL、协议版本；请求头是键值对的形式存在的，就是字段名：值；内容实体就是要传输的数据。")])]),t._v(" "),_("p",[t._v("​\t"),_("strong",[t._v("常见字段说明")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("例子")])])]),t._v(" "),_("tbody",[_("tr",[_("td"),t._v(" "),_("td",[t._v("请求方法")]),t._v(" "),_("td",[t._v("GET")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("HTTP版本号")]),t._v(" "),_("td",[t._v("HTTP/1.1")])]),t._v(" "),_("tr",[_("td",[t._v("Host")]),t._v(" "),_("td",[t._v("指定请求的服务器的域名和端口号")]),t._v(" "),_("td",[t._v("Host:www.baidu.com")])]),t._v(" "),_("tr",[_("td",[t._v("Connection")]),t._v(" "),_("td",[t._v("表示是否需要持久连接（HTTP1.1默认为长连接）")]),t._v(" "),_("td",[t._v("Connection:keep-alive(长连接),close(短连接)")])]),t._v(" "),_("tr",[_("td",[t._v("Cache-Control")]),t._v(" "),_("td",[t._v("指定请求和响应遵循的缓存机制")]),t._v(" "),_("td",[t._v("Cache-Control:max-age=0 或者 no-cache")])]),t._v(" "),_("tr",[_("td",[t._v("User-Agent")]),t._v(" "),_("td",[t._v("发出请求的用户信息（一般是浏览器的信息）")]),t._v(" "),_("td",[t._v("User-Agent: Mozilla/5.0 (Linux; X11)")])]),t._v(" "),_("tr",[_("td",[t._v("Accept")]),t._v(" "),_("td",[t._v("指定客户端能够接收的内容类型")]),t._v(" "),_("td",[t._v("Accept:text/html")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Encoding")]),t._v(" "),_("td",[t._v("指定浏览器可以支持的web服务器返回内容压缩编码类型")]),t._v(" "),_("td",[t._v("Accept-Encoding:gzip, deflate, br")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Language")]),t._v(" "),_("td",[t._v("浏览器可接受的语言")]),t._v(" "),_("td",[t._v("Accept-Language:zh-CN,zh")])]),t._v(" "),_("tr",[_("td",[t._v("Cookie")]),t._v(" "),_("td",[t._v("HTTP请求发送时，会把保存在该请求域名下的所有cookie值一起发送给web服务器")]),t._v(" "),_("td",[t._v("Cookie: $Version=1; Skin=new;")])])])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("响应报文")])]),t._v(" "),_("blockquote",[_("p",[t._v("响应报文由"),_("strong",[t._v("状态行、响应首部字段（响应头）、响应实体")]),t._v("组成，其中第一行是状态行，依次包含HTTP版本，状态码和状态短语组成；在一个回车换行之后是响应头，也是键值对的形式，字段名：值；然后会有一个空行也包含回车换行，之后是响应实体，就是要传输的数据。")])]),t._v(" "),_("p",[_("strong",[t._v("常见字段说明")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("例子")])])]),t._v(" "),_("tbody",[_("tr",[_("td"),t._v(" "),_("td",[t._v("HTTP版本号")]),t._v(" "),_("td",[t._v("HTTP/1.1")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("HTTP状态码")]),t._v(" "),_("td",[t._v("200 ok")])]),t._v(" "),_("tr",[_("td",[t._v("Cache-Control")]),t._v(" "),_("td",[t._v("告诉所有的缓存机制是否可以缓存那种类型")]),t._v(" "),_("td",[t._v("Cache-Control:private")])]),t._v(" "),_("tr",[_("td",[t._v("Connection")]),t._v(" "),_("td",[t._v("表示是否需要持久连接（HTTP1.1默认为长连接）")]),t._v(" "),_("td",[t._v("Connection:keep-alive(长连接),close(短连接)")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Encoding")]),t._v(" "),_("td",[t._v("web服务器支持的返回内容压缩编码类型")]),t._v(" "),_("td",[t._v("Content-Encoding:gzip")])]),t._v(" "),_("tr",[_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("原始服务器消息发出的时间")]),t._v(" "),_("td",[t._v("Date: Sat 30 September 2022 at 12:45:36 GMT")])]),t._v(" "),_("tr",[_("td",[t._v("Expires")]),t._v(" "),_("td",[t._v("响应过期的日期和时间")]),t._v(" "),_("td",[t._v("Expires: Sat 30 September 2022 at 12:46:36 GMT")])]),t._v(" "),_("tr",[_("td",[t._v("Server")]),t._v(" "),_("td",[t._v("web服务器软件名称")]),t._v(" "),_("td",[t._v("BWS/1.1")])]),t._v(" "),_("tr",[_("td",[t._v("Set-Cookie")]),t._v(" "),_("td",[t._v("设置Http Cookie")]),t._v(" "),_("td",[t._v("Set-Cookie:BDSVRTM=0;path=/")])]),t._v(" "),_("tr",[_("td",[t._v("Vary")]),t._v(" "),_("td",[t._v("告诉下游代理是使用缓存响应还是从原始服务器请求")]),t._v(" "),_("td",[t._v("Vary: Accept-Encoding")])]),t._v(" "),_("tr",[_("td",[t._v("Transfer-Encoding")]),t._v(" "),_("td",[t._v("文件传输编码")]),t._v(" "),_("td",[t._v("Transfer-Encoding:chunked")])])])]),t._v(" "),_("h3",{attrs:{id:"_1-3-http请求方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-http请求方法"}},[t._v("#")]),t._v(" 1.3 http请求方法")]),t._v(" "),_("blockquote",[_("p",[t._v("请求方法是客户端用来告知服务器其动作意图的方法。需要注意的是方法名区分大小写，需要用大写字母。")])]),t._v(" "),_("ul",[_("li",[_("ol",[_("li",[_("p",[t._v("GET：获取资源")]),t._v(" "),_("blockquote",[_("p",[t._v("向特定的资源发出请求。注意：GET方法不应当被用来产生“副作用”的操作中，例如在we app中的应用，其中一个原因是GET可能会被爬虫等随意访问。")])])])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"2"}},[_("li",[t._v("POST：传输实体主体")])])])]),t._v(" "),_("blockquote",[_("p",[t._v("向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立或对已有资源的修改。POST与GET的区别之一就是目的不同。GET的目的是获取，POST的目的是传输。")])]),t._v(" "),_("ul",[_("li",[_("ol",{attrs:{start:"3"}},[_("li",[t._v("PUT 传输主体")])]),t._v(" "),_("blockquote",[_("p",[t._v("PUT方法用来传输文件，向指定资源位置上传其最新内容。类似FTP协议，文件内容包含在请求报文的实体中，然后请求保存到URL指定的服务器位置。")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"4"}},[_("li",[t._v("HEAD：获得报文首部")])]),t._v(" "),_("blockquote",[_("p",[t._v("HEAD方法类似GET方法，但是不同的是HEAD方法不要求返回数据（响应体）。这一方法可以在不必传输整个响应内容的情况下，就可以获取包含在响应消息头中的元信息。该方法常用于测试超链接的有效性，是否可以访问，以及最近是否更新等信息。")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"5"}},[_("li",[t._v("DELETE：删除文件")])]),t._v(" "),_("blockquote",[_("p",[t._v("DELETE方法用来删除文件，是与PUT相反的方法。DELETE要求服务器删除Request-URI所标识的资源。")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"6"}},[_("li",[t._v("OPTIONS：询问支持的方法")])]),t._v(" "),_("blockquote",[_("p",[t._v("因为并不是所有的服务器都支持规定的方法，为了安全有些服务器可能会禁止掉一些方法例如DELETE、PUT等。那么OPTIONS就是用来询问服务器支持的方法。")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"7"}},[_("li",[t._v("TRACE：追踪路径")])])])]),t._v(" "),_("blockquote",[_("p",[t._v("TRACE方法是让Web服务器将之前的请求通信环回给客户端的方法。这个方法并不常用。")])]),t._v(" "),_("ul",[_("li",[_("ol",{attrs:{start:"8"}},[_("li",[t._v("CONNECT：要求用隧道协议连接代理*")])])])]),t._v(" "),_("blockquote",[_("p",[t._v("CONNECT方法要求在与代理服务器通信时建立隧道，实现用隧道协议进行TCP通信。主要使用SSL/TLS协议对通信内容加密后传输。")])]),t._v(" "),_("h3",{attrs:{id:"_1-4-状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-状态码"}},[t._v("#")]),t._v(" 1.4 状态码")]),t._v(" "),_("blockquote",[_("p",[t._v("状态码是用来告知客户端服务器端处理请求的结果。凭借状态码用户可以知道服务器是请求处理成功、失败或者是被转发；这样出现了错误也好定位。状态码是由3位数字加原因短语组成。3位数字中的第一位是用来指定状态的类别")])]),t._v(" "),_("p",[_("strong",[t._v("常见状态码")])]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("200")]),t._v("：请求成功，服务器已成功处理了请求\n300：多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择\n301（Moved Permanently，永久移动）：请求的资源已被永久地移动到新URL，返回信息会包括新的URL，浏览器会自动定向到新URL，今后任何新的请求都应使用新的URL代替。\n"),_("strong",[t._v("302（临时移动）")]),t._v("：资源只是临时被移动，客户端应继续使用原有URL\n"),_("strong",[t._v("400（Bad request）")]),t._v("：客户端请求的语法错误，服务器无法理解\n401（Unauthorized）：请求需要有通过HTTP认证的认证信息\n"),_("strong",[t._v("403（Forbidden）")]),t._v("：无权限，服务器拒绝提供服务\n"),_("strong",[t._v("404（Not Found）")]),t._v("：没找到资源\n408（Request Timeout）：表示客户端请求超时\n"),_("strong",[t._v("500（Internal Server error）")]),t._v("：服务器内部错误\n"),_("strong",[t._v("503（Server Unavailable）")]),t._v("：服务暂不可用，表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。\n"),_("strong",[t._v("504（Gateway Timeout）")]),t._v("：网关超时，是代理服务器等待应用服务器响应时的超时。\n505（HTTP version not supported）：服务器不支持请求的HTTP协议的版本，无法完成处理。")])]),t._v(" "),_("p",[_("strong",[t._v("301和302的区别")])]),t._v(" "),_("blockquote",[_("p",[t._v("301：永久性转移，表示旧地址A的资源已经被永久地移除了（这个资源不可访问了），搜索引擎在抓取新内容的同时也将旧的网址交换为重定向之后的网址。\n302：暂时性转移，表示旧地址A的资源还在（仍然可以访问），这个重定向只是临时地从旧地址A跳转到地址B，搜索引擎会抓取新的内容而保存旧的网址")])]),t._v(" "),_("p",[_("strong",[t._v("重定向的意义？")])]),t._v(" "),_("blockquote",[_("p",[t._v("重定向是为了负载均衡或导入流量，提高SEO排名（搜索引擎排名）。利用一个前端服务器接受请求，然后负载到不同的主机上，可以大大提高站点的业务并发处理能力；重定向也可将多个域名的访问，集中到一个站点；由于baidu.com，www.baidu.com会被搜索引擎认为是两个网站，造成每个的连接数都会减少从而降低排名，永久重定向会将两个地址关联起来，搜索引擎会认为是同一个网站，从而提高排名。")])]),t._v(" "),_("h2",{attrs:{id:"_2-http和https的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-http和https的区别"}},[t._v("#")]),t._v(" 2. HTTP和HTTPS的区别？")]),t._v(" "),_("blockquote",[_("ol",[_("li",[t._v("HTTP的URL以http开头，HTTPS的URL以https开头")]),t._v(" "),_("li",[t._v("HTTP是不安全的，而HTTPS是安全的。HTTP是超文本传输协议，信息是明文传输，HTTPS则是具有安全性的SSL加密传输协议。HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比HTTP协议安全。")]),t._v(" "),_("li",[t._v("HTTPS协议需要到ca申请证书，HTTP无需证书。一般免费证书很少，需要交费")]),t._v(" "),_("li",[t._v("HTTP和HTTPS使用的是完全不同的连接方式，用的端口也不一样，HTTP标准端口是80，HTTPS标准端口是443。")]),t._v(" "),_("li",[t._v("HTTP的连接很简单，是无状态的。")])])]),t._v(" "),_("h2",{attrs:{id:"_3-iso七层网络模型-五层网络模型-tcpip四层网络模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-iso七层网络模型-五层网络模型-tcpip四层网络模型"}},[t._v("#")]),t._v(" 3. ISO七层网络模型/五层网络模型/TCPIP四层网络模型")]),t._v(" "),_("h3",{attrs:{id:"_3-1-iso七层网络模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-iso七层网络模型"}},[t._v("#")]),t._v(" 3.1   ISO七层网络模型")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名字")]),t._v(" "),_("th",[t._v("主要功能")]),t._v(" "),_("th",[t._v("对应的典型设备")]),t._v(" "),_("th",[t._v("传输单位")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("应用层")]),t._v(" "),_("td",[t._v("提供应用程序间通信")]),t._v(" "),_("td",[t._v("计算机：应用程序，如FTP、SMTP、HTTP等")]),t._v(" "),_("td",[t._v("程序级数据")])]),t._v(" "),_("tr",[_("td",[t._v("表示层")]),t._v(" "),_("td",[t._v("处理数据格式、数据加密等")]),t._v(" "),_("td",[t._v("计算机：编码方式，如图像编解码、URL字段传输编码等")]),t._v(" "),_("td",[t._v("程序级数据")])]),t._v(" "),_("tr",[_("td",[t._v("会话层")]),t._v(" "),_("td",[t._v("建立、维护和管理会话")]),t._v(" "),_("td",[t._v("计算机：建立会话，如session认证、断点续传")]),t._v(" "),_("td",[t._v("程序级数据")])]),t._v(" "),_("tr",[_("td",[t._v("传输层")]),t._v(" "),_("td",[t._v("建立主机端到端连接")]),t._v(" "),_("td",[t._v("计算机：进程和端口")]),t._v(" "),_("td",[t._v("数据段（segment）")])]),t._v(" "),_("tr",[_("td",[t._v("网络层")]),t._v(" "),_("td",[t._v("寻址和路由选择")]),t._v(" "),_("td",[t._v("网络：路由器、防火墙、多层交换机")]),t._v(" "),_("td",[t._v("数据包（packet）")])]),t._v(" "),_("tr",[_("td",[t._v("数据链路层")]),t._v(" "),_("td",[t._v("提供介质访问、链路管理等")]),t._v(" "),_("td",[t._v("网络：网卡、网桥、交换机")]),t._v(" "),_("td",[t._v("帧（frame）")])]),t._v(" "),_("tr",[_("td",[t._v("物理层")]),t._v(" "),_("td",[t._v("比特流传输")]),t._v(" "),_("td",[t._v("网络：中继器、集线器、网线和HUB")]),t._v(" "),_("td",[t._v("比特（bit）")])])])]),t._v(" "),_("h3",{attrs:{id:"_3-2-五层网络模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-五层网络模型"}},[t._v("#")]),t._v(" 3.2  五层网络模型")]),t._v(" "),_("blockquote",[_("ol",[_("li",[t._v("**应用层：**确定进程之间通信的性质以满足用户需求。应用层协议有很多，如支持万维网应用的HTTP协议，支持电子邮件的SMTP协议，支持文件传送的FTP协议等。")]),t._v(" "),_("li",[t._v("**运输层：**负责主机间不同进程的通信。这一层中的协议有面向连接的TCP（传输控制协议）、无连接的UDP（用户数据报协议）；数据传输的单元称为报文段或用户数据报。")]),t._v(" "),_("li",[t._v("**网络层：**负责分组交换网中不同主机间的通信。作用：发送数据时，将运输层中的报文段或用户数据报封装成IP数据报，并选择合适路由。")]),t._v(" "),_("li",[t._v("**数据链路层：**负责将网络层的IP数据报组装成帧。")]),t._v(" "),_("li",[t._v("**物理层：**透明地传输比特流。")])])]),t._v(" "),_("h3",{attrs:{id:"_3-3-tcp-ip分层模型-四层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-tcp-ip分层模型-四层"}},[t._v("#")]),t._v(" 3.3 TCP/IP分层模型（四层）")]),t._v(" "),_("blockquote",[_("ol",[_("li",[_("strong",[t._v("应用层")]),t._v("\n对应于OSI七层模型的应用层和表示层。因特网的应用层协议包括：FTP（文件传输协议）、HTTP（超文本传输协议）、Telent（远程终端协议）、SMTP（简单邮件传送协议）等。")]),t._v(" "),_("li",[_("strong",[t._v("传输层")]),t._v("\n对应于OSI七层模型的传输层，提供两种端到端的通信服务。其中TCP协议提供可靠的数据流运输服务，UDP协议提供不可靠的用户数据报服务。")]),t._v(" "),_("li",[_("strong",[t._v("网间层")]),t._v("\n对应于OSI七层模型的网络层。本层包括IP协议、RIP协议，负责数据的包装、寻址和路由。同时还包含ICMP（网间控制报文协议）用来提供网络诊断信息。")]),t._v(" "),_("li",[_("strong",[t._v("网络接口层")]),t._v("\n提供TCP/IP协议的数据结构和实际物理硬件之间的接口")])])]),t._v(" "),_("h2",{attrs:{id:"_4-tcp-ip"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-tcp-ip"}},[t._v("#")]),t._v(" 4. TCP/IP")]),t._v(" "),_("h3",{attrs:{id:"_4-1-tcp-udp-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-tcp-udp-的区别"}},[t._v("#")]),t._v(" 4.1 TCP/UDP 的区别")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("TCP")]),t._v(" "),_("th",[t._v("UDP")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("可靠性")]),t._v(" "),_("td",[t._v("可靠")]),t._v(" "),_("td",[t._v("不可靠")])]),t._v(" "),_("tr",[_("td",[t._v("连接性")]),t._v(" "),_("td",[t._v("面向连接")]),t._v(" "),_("td",[t._v("无连接")])]),t._v(" "),_("tr",[_("td",[t._v("报文")]),t._v(" "),_("td",[t._v("面向字节流")]),t._v(" "),_("td",[t._v("面向报文（保留报文的边界）")])]),t._v(" "),_("tr",[_("td",[t._v("效率")]),t._v(" "),_("td",[t._v("传输效率低")]),t._v(" "),_("td",[t._v("传输效率高")])]),t._v(" "),_("tr",[_("td",[t._v("双工性")]),t._v(" "),_("td",[t._v("全双工（点到点）")]),t._v(" "),_("td",[t._v("一对一、一对多、多对一、多对多")])]),t._v(" "),_("tr",[_("td",[t._v("流量控制")]),t._v(" "),_("td",[t._v("有（滑动窗口）")]),t._v(" "),_("td",[t._v("无")])]),t._v(" "),_("tr",[_("td",[t._v("拥塞控制")]),t._v(" "),_("td",[t._v("有（慢开始、拥塞避免、快重传、快恢复）")]),t._v(" "),_("td",[t._v("无")])])])]),t._v(" "),_("h3",{attrs:{id:"_4-12tcp-报文详解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-12tcp-报文详解"}},[t._v("#")]),t._v(" 4.12TCP 报文详解")]),t._v(" "),_("blockquote",[_("p",[t._v("TCP首部的前20个字节是固定的，后面有可能还有4N字节的选项（根据需要而增加）。因此TCP首部最小长度是20个字节。")])]),t._v(" "),_("ol",[_("li",[t._v("每个TCP链接都包括"),_("strong",[t._v("源端与目的端的端口号")]),t._v("，各占2个字节，这两个值加上IP首部中源端IP地址与目的端IP地址构成一个TCP连接")]),t._v(" "),_("li",[_("strong",[t._v("序号")]),t._v("，无符号数，占4个字节。是用来标识从发端向收端发送的数据字节流。TCP是面向字节流的，它所传送的字节流中的每个字节都按顺序编号，整个要传送的字节流的起始序号是在建立连接时设置。而首部中的序号字段值是本报文段所发送的数据的第一个字节的序号。")]),t._v(" "),_("li",[_("strong",[t._v("确认号，也占4个字节")]),t._v("，是期望收到的对方下一个报文段的第一个数据字节的序号。\n只有ACK的标志为1时，确认序号字段才有效，发送该字段无任何代价，因为确认序号与ACK标志一样总是TCP首部的一部分。因此当一个连接被建立之后，这个字段总是被设置，ACK标志也总是被置为1。")]),t._v(" "),_("li",[_("strong",[t._v("数据偏移，占4位（注意是位不是字节）")]),t._v("，它指出TCP报文段数据部分距报文段的起始部分有多远。也就是指出TCP报文段首部的长度。")]),t._v(" "),_("li",[_("strong",[t._v("保留，占6位")]),t._v("，保留为今后使用。")])]),t._v(" "),_("p",[_("strong",[t._v("六个控制字段，这六个字段各占一位")])]),t._v(" "),_("ol",{attrs:{start:"6"}},[_("li",[_("p",[_("strong",[t._v("紧急URG(URGent)")]),t._v("：当URG=1时，表明“紧急指针”字段有效。它告诉系统此报文段中有紧急数据，应当尽快传送，而不要按原来的排除顺序进行传送。当你用网络程序传送数据时，忽然发现了一些问题，想取消该程序的运行，发出中断命令，这时就可以使用紧急数据，如果不这样，控制命令字符就处于TCP缓存末尾，只有在所有数据处理完毕之后，这个控制命令字符才会被交付到接收方的应用进程，这样就浪费了许多时间。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("确认ACK(ACKnowlegment)")]),t._v("：当ACK=1时，“确认”字段才有效，TCP规定，在连接建立后，所有传送的报文段，都必须报文段置1。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("推送PSH(PuSH)")]),t._v("：这个很少使用。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("复位RST(ReSet)")]),t._v("：当RST=1表明，表明TCP连接中出现严重差错，必须释放连接，然后再重新建立连接。RST置1用来拒绝一个非法的报文段（例如客户端在没有发送SYN报文的情况下，忽然发送一个ACk包，服务端自然会回应一RST报文进行拒绝)，或拒绝打开一个连接。因此RST位也叫做重置位或重建位。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("同步SYN(SYNchronization)")]),t._v("：在建立连接时用来同步序号。当SYN=1而ACK=0时，表明这是一个连接请求报文段；对方若同意建立连接，则在响应的报文段使用SYN=1并且ACK=1。因此当SYN=1时，表明这是一个连接请求或连接接受报文。关于TCP的连接的建立与释放请看：Tcp协议怎样建立主机之间连接——“三次握手”")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("终止FIN(FiNis)")]),t._v("：用来释放一个连接，当FIN=1时，表示此报文段发送方的数据已发送完毕，并要求释放连。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("窗口大小：占2个字节")]),t._v("，窗口值范围是[0， 2的16次方-1]。窗口指的是发送报文段的一方的接收窗口（并非自己的发送窗口）。窗口值告诉对方：从本报文段首部中的确认号算起，接收目前允许对方发送的数据量。之所以要有这个限制，是因为接收方的数据缓存空间是有限的。窗口值将作为接收方让发送方设置其发送窗口的依据。窗口值是经常在变化着的。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("检验和：占2个字节")]),t._v("，该字段检验的范围包括报文段的首部和数据两个部分。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("紧急指针：占2个字节")]),t._v("，只有当URG=1时，这个字段才有效。它指出本报文段中紧急数据的字节数，而紧急数据结束后就是普通数据。当所有紧急数据都处理完成时，TCP就告诉应用程序恢复到正常操作。")])])]),t._v(" "),_("p",[t._v("值得注意的是，即使窗口为0也可以发送紧急数据。")]),t._v(" "),_("ol",{attrs:{start:"15"}},[_("li",[_("strong",[t._v("选项：长度可变，最长可以达40个字节。当没有使用选项时，首部的长度为20个字节。")])])]),t._v(" "),_("p",[t._v("最初TCP只规定了一种选项即最大报文段长度MSS（Maximum Segment Size)，它指的是报文段中数据部分的长度。后来又陆续增加了“窗口扩大”选项、“时间戳”选项及有关“选择确认(SACK)”选项")]),t._v(" "),_("h3",{attrs:{id:"_4-3-tcp-的三次握手-四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-tcp-的三次握手-四次挥手"}},[t._v("#")]),t._v(" 4.3 TCP 的三次握手，四次挥手")]),t._v(" "),_("h4",{attrs:{id:"_4-3-1-三次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-三次握手"}},[t._v("#")]),t._v(" 4.3.1 三次握手")]),t._v(" "),_("ol",[_("li",[t._v("**SYN_SENT：**第一次握手发生阶段，客户端发起连接。客户端调用connect，发送SYN给服务器端，然后进入SYN_SENT状态，等待服务器端确认（三次握手中的第二个报文）。如果服务器端不能连接，则直接进入CLOSED状态。")]),t._v(" "),_("li",[t._v("**LISTEN：**服务器端等待连接的状态。服务器端经过socket, bind, listen函数之后进入此状态，开始监听客户端发过来的连接请求。此称为应用程序被动打开（等到客户端连接请求）。")]),t._v(" "),_("li",[t._v("**SYN_RCVD：**第二次握手发生阶段，这里是服务器端接收到了客户端的SYN，此时服务器由LISTEN进入SYN_RCVD状态，同时服务器端回应一个ACK，然后再发送一个SYN即SYN+ACK给客户端。")]),t._v(" "),_("li",[t._v("**ESTABLISHED：**第三次握手发生阶段，客户端接收到服务器端的ACK包（ACK、SYN）之后，也会发送一个ACK确认包，客户端进入ESTABLISHED状态，表明客户端这边已经准备好，但TCP需要两端都准备好才可以进行数据传输。服务器端收到客户端的ACK之后会从SYN_RCVD状态转移到ESTABLISHED状态，表明服务器端也准备好进行数据传输了。这样客户端和服务器端都是ESTABLISHED状态，就可以进行后面的数据传输了。所以ESTABLISHED也可以说是一个数据传送状态。")])]),t._v(" "),_("h4",{attrs:{id:"_4-3-2-四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-四次挥手"}},[t._v("#")]),t._v(" 4.3.2 四次挥手")]),t._v(" "),_("ol",[_("li",[t._v("**FIN_WAIT_1：**第一次挥手，主动关闭的一方（执行主动关闭的一方既可以是客户端，也可以是服务器端，这里以客户端执行主动关闭为例），终止连接时，发送FIN给对方，然后等待对方返回ACK。调用close()第一次挥手就进入此状态。")]),t._v(" "),_("li",[t._v("**CLOSE_WAIT：**接收到FIN之后，被动关闭的一方进入此状态。具体动作是接收到FIN，同时发送ACK。之所以叫CLOSE_WAIT可以理解为被动关闭的一方此时正在等待上层应用程序发出关闭连接指令。因为TCP关闭是全双工过程，这里客户端执行了主动关闭，被动方服务器端接收到FIN后也需要调用close关闭，这个CLOSE_WAIT就是处于这个状态，等待发送FIN，发送了FIN则进入LAST_ACK状态。")]),t._v(" "),_("li",[t._v("**FIN_WAIT_2：**主动端（这里是客户端）先执行主动关闭发送FIN，然后接收到被动方返回的ACK后进入此状态。")]),t._v(" "),_("li",[t._v("**LAST_ACK：**被动方（服务器端）发起关闭请求，由状态2进入此状态，具体动作是发送FIN给对方，同时在接收到ACK时进入CLOSED状态。")]),t._v(" "),_("li",[t._v("**CLOSING：**两边同时发起关闭请求时（即主动方发送FIN，等待被动方返回ACK，同时被动方也发送了FIN，主动方接收到了FIN之后，发送ACK给被动方），主动方会由FIN_WAIT_1进入此状态，等待被动方返回ACK。")]),t._v(" "),_("li",[t._v("**TIME_WAIT：**四次挥手操作最后都会经过这样一个状态然后进入CLOSED状态。共有三个状态会进入此状态")])]),t._v(" "),_("blockquote",[_("ul",[_("li",[_("p",[_("strong",[t._v("由CLOSING进入")]),t._v("：同时发起关闭情况下，当主动端接收到ACK后，进入此状态，实际上这里的同时是这样的情况：客户端发起关闭请求，发送FIN之后等待服务器端回应ACK，但此时服务器端同时也发起关闭请求，也发送了FIN，并且被客户端先于ACK接收到。")])]),t._v(" "),_("li",[_("p",[t._v("**由FIN_WAIT_1进入：**发起关闭后，发送了FIN，等待ACK的时候，正好被动方也发起关闭请求，发送了FIN，这是客户端接收到了先前ACK，也收到了对方的FIN（即ACK和FIN同时收到），然后发送ACK，进入TIME_WAIT状态（这里跳过了FIN_WAIT_2状态）")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("由FIN_WAIT_2进入")])])])])]),t._v(" "),_("h4",{attrs:{id:"_4-3-3-dns解析流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-3-dns解析流程"}},[t._v("#")]),t._v(" 4.3.3 DNS解析流程")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("DNS（Domain Name System的缩写）域名系统，主要提供网站域名与IP地址的相互转化的服务，就是根据域名查出IP地址")]),t._v("。")])]),t._v(" "),_("p",[_("strong",[t._v("域名解析时使用UDP协议")])]),t._v(" "),_("blockquote",[_("p",[t._v("客户端向DNS服务器查询域名，一般返回的内容都不超过512字节，用UDP 传输即可。不用经过TCP三次握手，这样DNS服务器负载更低，响应更快。虽然从理论上说，客户端也可以指定向DNS服务器查询的时候使用TCP，但事实上，很多DNS服务器进行配置的时候，仅支持UDP查询包。")])]),t._v(" "),_("p",[_("strong",[t._v("DNS服务的工作过程：")])]),t._v(" "),_("blockquote",[_("p",[t._v("当DNS客户机需要查询程序中使用的名称时，它会查询本地DNS服务器来解析该名称。客户机发送的每条查询消息都包括3条信息，以指定服务器应回答的问题。")]),t._v(" "),_("ol",[_("li",[t._v("指定的DNS域名，表示为完全合格的域名（FQDN）")]),t._v(" "),_("li",[t._v("指定的查询类型，它可根据类型指定资源记录，或作为查询操作的专门类型。")]),t._v(" "),_("li",[t._v("DNS域名的指定类别")])])]),t._v(" "),_("p",[t._v("对于DNS服务器，它始终应指定为internet类别")]),t._v(" "),_("h2",{attrs:{id:"_5-io多路复用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-io多路复用"}},[t._v("#")]),t._v(" 5. IO多路复用")]),t._v(" "),_("blockquote",[_("p",[t._v("多路IO复用，有时也称为事件驱动IO，基本原理就是有个函数（如select）会不断地轮询所负责的所有socket，当某个socket有数据到达了，就通知用户进程。")]),t._v(" "),_("p",[t._v("select、poll和epoll都是多路IO复用的机制。多路IO复用就通过一种机制，可以监视多个描述符，一旦某个描述符（一般是读就绪或者写就绪），能够通知程序进行相应的读写操作。但select、poll和epoll本质上都是同步IO，因为它们都需要在读写时间就绪后自己负责进行读写，即是阻塞的，而异步IO则无须自己负责进行读写，异步IO的实现会负责把数据从内核拷贝到用户空间。")])]),t._v(" "),_("h2",{attrs:{id:"_6-tcp粘包-拆包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-tcp粘包-拆包"}},[t._v("#")]),t._v(" 6. TCP粘包/拆包")]),t._v(" "),_("div",{staticClass:"language-text line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("由于TCP传输协议面向流的，没有消息保护边界。一方发送的多个报文可能会被合并成一个大的报文进行传输，这就是粘包；也可能发送的一个报文，可能会被拆分成多个小报文，这就是拆包\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[_("img",{attrs:{src:v(376),alt:"image"}})]),t._v(" "),_("div",{staticClass:"language-text line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("1. 正常的理想情况: server端分两次读取到了两个独立的数据包，分别是D1和D2，没有粘包和拆包\n2. 粘包: 两个包较小，间隔时间短，发生粘包，合并成一个包发送，server一次接受到了两个数据包，D1和D2粘合在一起，称之为TCP粘包\n3. 拆包: 一个包过大，超过缓存区大小，拆分成两个或多个包发送，server分两次读取到了数据包，第一次读取到了完整的D1包和D2包的部分内容，第二次读取到了D2包的剩余内容，这称之为TCP拆包\n4. 拆包和粘包：Server分两次读取到了数据包，第一次读取到了D1包的部分内容D1_1，第二次读取到了D1包的剩余部分内容D1_2和完整的D2包。\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br")])]),_("blockquote",[_("p",[_("strong",[t._v("由于发送方发送的数据，可能会发生粘包、拆包的情况。这样，对于接收端就难于分辨出来了，因此必须提供科学的机制来解决粘包、拆包问题，这就是协议的作用")])])]),t._v(" "),_("h3",{attrs:{id:"_6-1-粘包-拆包产生的原因"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-粘包-拆包产生的原因"}},[t._v("#")]),t._v(" 6.1 粘包/拆包产生的原因")]),t._v(" "),_("div",{staticClass:"language-text line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("1) socket缓冲区与滑动窗口\n2) MSS/MTU限制\n3) Nagle算法\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br")])]),_("h3",{attrs:{id:"_6-2-解决方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-解决方案"}},[t._v("#")]),t._v(" 6.2 解决方案")]),t._v(" "),_("div",{staticClass:"language-text line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("1) 发送端将每个包都封装成固定的长度，比如100字节大小。如果不足100字节可通过补0或空等进行填充到指定长度；\n2) 发送端在每个包的末尾使用固定的分隔符，例如\\r\\n。如果发生拆包需等待多个包发送过来之后再找到其中的\\r\\n进行合并；例如，FTP协议；\n3) 将消息分为头部和消息体，头部中保存整个消息的长度，只有读取到足够长度的消息之后才算是读到了一个完整的消息；\n4) 通过自定义协议进行粘包和拆包的处理\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br")])]),_("blockquote",[_("p",[t._v("TCP协议粘包拆包问题是因为TCP协议数据传输是基于字节流的，它不包含消息、数据包等概念，需要应用层协议自己设计消息的边界，即消息帧（Message Framing）。如果应用层协议没有使用基于长度或者基于终结符息边界等方式进行处理，则会导致多个消息的粘包和拆包。")])]),t._v(" "),_("h2",{attrs:{id:"_7-tcp-连接断开的状态变化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-tcp-连接断开的状态变化"}},[t._v("#")]),t._v(" 7. TCP 连接断开的状态变化")]),t._v(" "),_("p",[t._v("服务器状态转移过程：")]),t._v(" "),_("blockquote",[_("p",[t._v("服务器通过listen系统调用进入LISTE N状态，被动等待客户端连接，listen系统调用创建了一个监听队列，用来存放待处理的客户连接。")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("服务器一旦监听到某个客户端连接请求（即收到同步报文段(SYN)），就把该客户端连接放入内核监听队列中，并向客户端发送带SYN标志的确认报文段(ACK)。此时服务器端的连接状态处于SYN_RCVD状态。\n\n如果服务器成功地连接收到客户端发送的确认报文段(ACK)，则服务器连接状态转移到ESTABLISHED状态。ESTABLISHED状态是连接双方能够进行双向数据传输的状态。\n\n当客户端主动关闭连接时（通过close或shutdown系统调用向服务器发送结束报文段(FIN)），服务器通过返回客户端确认报文段(ACK)使连接进入CLOSE_WAIT状态。CLOSE_WAIT状态：等待服务器应用程序关闭连接。\n\n当服务器检测到客户端关闭连接后，也会立即发送发送一个结束报文段(FIN)来关闭连接，这是服务器连接状态转移LAST_ACK状态，以等待客户端对结束报文段的最后一次确认（即客户端发送一个确认报文段(ACK)），一旦确认完成，连接就彻底关闭掉。 \n")])])]),_("p",[t._v("客户端状态转移过程：")]),t._v(" "),_("blockquote",[_("p",[t._v("客户端通过connect系统调用主动与服务器建立连接。connect系统调用首先给服务器发送一个同步报文段(SYN)，是客户端的连接状态转移到SYN_SENT状态。此后，connect系统调用可能因为如下两个原因失败返回：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("如果connect连接的目标端口不存在（未被任何进程监听），（即命名socket的bind系统调用中的端口不存在），或则该端口仍被处于TMIE_WAIT状态的连接所占用着，则服务器讲给客户端发送一个复位报文段(RST)，connect调用失败。")])]),t._v(" "),_("li",[_("p",[t._v("如果端口存在，但connect在超时时间内未收到服务器的确认报文段(ACK),则connect调用失败。connect调用失败将使连接立即返回当初的CLOSED状态。")])])])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("如果客户端成功收到服务器的同步报文段(SYN)和确认报文段(ACK),connect调用成功返回。此时客户端连接状态转移到ESTABLISHED状态。\n\n然后客户端向服务器发送一个确认报文段(ACK)。服务器收到这个确认报文段(ACK)后,则服务器连接状态转移ESTABLISHED状态。\n\n 当客户端执行主动关闭时，它将向服务器发送一个结束报文段(FIN)，同时客户端连接进入FIN_WAIT_1状态。\n\n 若此时客户端收到服务器专门用于确认目的的确认报文段(ACK),则连接转移至FIN_WAIT_2状态。\n\n当客户端处于FIN_WAIT_2状态时，服务器处于CLOSE_WAIT状态，这一对状态是有可能发生半关闭的状态。\n\n此时服务器也关闭连接发送结束报文段(FIN)给客户端，则客户端将给予确认发送一个确认报文段给服务器，则客户端进入TIME_WAIT状态。\n\n假如服务器直接收到客户端发送来的带有确认信息(ACK)的结束报文段(FIN)，那么客户端可以直接从FIN_WAIT_1状态转移到TIME_WAIT状态。\n")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);