# Docker
```text
Docker是基于Go语言实现的云开源项目。 Docker的主要目标是“Build，Ship and Run Any App , Anywhere”，也就是通过对应用组件的封装、分发、部署、运行等生命周期的管理，使用户的APP（可以是一个WEB应用或数据库应用等等）及其运行 环境能够做到“一次封装，到处运行”。 
Linux 容器技术的出现就解决了这样一个问题，而 Docker 就是在它的基础上发展过来的。
将应用运行在 Docker 容器上面，而 Docker 容器在任何操作系统上都是一致的，这就实现了跨平台、跨服务器。只需 要一次配置好环境，换到别的机子上就可以一键部署好，大大简化了操作
```


## 1. 虚拟化技术

**虚拟机**
> 虚拟机（virtual machine）就是带环境安装的一种解决方案。 它可以在一种操作系统里面运行另一种操作系统，比如在Windows 系统里面运行Linux 系统。应用程序 对此毫无感知，因为虚拟机看上去跟真实系统一模一样，而对于底层系统来说，虚拟机就是一个普通文 件，不需要了就删掉，对其他部分毫无影响。这类虚拟机完美的运行了另一套系统，能够使应用程序， 操作系统和硬件三者之间的逻辑不变。
```text
缺点：
    1 、资源占用多
    2 、冗余步骤多
    3 、启动慢
```

**容器**
>  Linux 容器（Linux Containers，缩 写为 LXC）。 Linux 容器不是模拟一个完整的操作系统，而是对进程进行隔离。有了容器，就可以将软件运行所需的 所有资源打包到一个隔离的容器中。容器与虚拟机不同，不需要捆绑一整套操作系统，只需要软件工作 所需的库资源和设置。系统因此而变得高效轻量并保证部署在任何环境中的软件都能始终如一地运行



## 2. docker 的概念及组成
> Docker 本身是一个容器运行载体或称之为管理引擎。我们把应用程序和配置依赖打包好形成一个 可交付的运行环境，这个打包好的运行环境就似乎 image镜像文件。只有通过这个镜像文件才能生 成 Docker 容器。image 文件可以看作是容器的模板。Docker 根据 image 文件生成容器的实例。 同一个 image 文件，可以生成多个同时运行的容器实例

### 2.1 docker 的组成
```text
1. image(镜像) 
    Docker 镜像（Image）就是一个只读的模板。镜像可以用来创建 Docker 容器，一个镜像可以创建很多容器。 

2. 容器(container)
    Docker 利用容器（Container）独立运行的一个或一组应用。容器是用镜像创建的运行实例。 
    它可以被启动、开始、停止、删除。每个容器都是相互隔离的，保证安全的平台。 
    可以把容器看做是一个简易版的 Linux 环境（包括root用户权限、进程空间、用户空间和网络空间等） 和运行在其中的应用程序。。 
    容器的定义和镜像几乎一模一样，也是一堆层的统一视角，唯一区别在于容器的最上面那一层是可读可写 的。

3. 仓库(repository)
    仓库（Repository）是集中存放镜像文件的场所。 
    仓库(Repository)和仓库注册服务器（Registry）是有区别的。仓库注册服务器上往往存放着多个仓 库，每个仓库中又包含了多个镜像，每个镜像有不同的标签（tag）。 
    仓库分为公开仓库（Public）和私有仓库（Private）两种形式。 
```

### 2.2 docker run的流程是什么？
```text
case: 
    docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

检查本地镜像是否存在
    TRUE： 直接以该镜像生成容器实例
    FALSE： 去docker仓库中拉取镜像，如果docker仓库不存在，则会直接报错
            如果docker存在拉取该镜像生产容器实例
```

### 2.3 docker的工作原理
> Docker是一个Client-Server结构的系统，Docker守护进程运行在主机上， 然后通过Socket连接从客户 端访问，守护进程从客户端接受命令并管理运行在主机上的容器,容器是一个运行时环境.

> ![image](./image/docker%E5%BA%95%E5%B1%82%E5%8E%9F%E7%90%86.png)

```text
1、docker有着比虚拟机更少的抽象层。由于docker不需要Hypervisor实现硬件资源虚拟化,运行在 docker容器上的程序直接使用的都是实际物理机的硬件资源。

2、docker利用的是宿主机的内核,而不需要Guest OS。因此,当新建一个容器时,docker不需要和虚拟机一样重新加载一个操作系统内核。
仍而避免引寻、加载操作系统内核返个比较费时费资源的过程,当新建 一个虚拟机时,虚拟机软件需要加载Guest OS,返个新建过程是分钟级别的。而docker由于直接利用宿主 机的操作系统,则省略了返个过程,因此新建一个docker容器只需要几秒钟
```

## 3. docker 镜像加载
> 镜像是一种轻量级、可执行的独立软件包，用来打包软件运行环境和基于运行环境开发的软件，它包含 运行某个软件所需的所有内容，包括代码、运行时、库、环境变量和配置文件


### 3.1 UnionFS （联合文件系统）
> UnionFS（联合文件系统）：Union文件系统（UnionFS）是一种分层、轻量级并且高性能的文件系统， 它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系 统下(unite several directories into a single virtual filesystem)。Union 文件系统是 Docker 镜像的基 础。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。 特性：一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件 系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录


### 3.2 Docker镜像加载原理
> 1. docker的镜像实际上由一层一层的文件系统组成，这种层级的文件系统UnionFS。
> 2. bootfs(boot file system)主要包含bootloader和kernel, bootloader主要是引导加载kernel, Linux刚启
动时会加载bootfs文件系统，在Docker镜像的最底层是bootfs。
> 3. 当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由bootfs转交给内核，此时系统也会卸载bootfs。 rootfs (root file system) ，在bootfs之上。

**镜像分层**
![image](./image/%E9%95%9C%E5%83%8F%E5%88%86%E5%B1%82.png)

### 3.3 Dockerfile
> dockerfile是用来构建Docker镜像的构建文件，是由一系列命令和参数构成的脚本。

```text
FROM # 基础镜像，当前新镜像是基于哪个镜像的
MAINTAINER # 镜像维护者的姓名混合邮箱地址,官方已经不在推荐用了
RUN  # 容器构建时需要运行的命令
EXPOSE # 当前容器对外保留出的端口
WORKDIR  # 指定在创建容器后，终端默认登录的进来工作目录，一个落脚点
ENV  # 用来在构建镜像过程中设置环境变量
ADD  # 将宿主机目录下的文件拷贝进镜像且ADD命令会自动处理URL和解压tar压缩包
COPY # 类似ADD，拷贝文件和目录到镜像中！
VOLUME # 容器数据卷，用于数据保存和持久化工作
CMD  # 指定一个容器启动时要运行的命令，dockerFile中可以有多个CMD指令，但只有最后一个生效！
ENTRYPOINT # 指定一个容器启动时要运行的命令！和CMD一样
ONBUILD  # 当构建一个被继承的DockerFile时运行命令，父镜像在被子镜像继承后，父镜像的
ONBUILD被触发
```



## 4. Docker 详细思维导图
![image](./image/docker.png)