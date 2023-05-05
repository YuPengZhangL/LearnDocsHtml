(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{416:function(s,n,t){"use strict";t.r(n);var a=t(10),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"虚拟机部署k8s集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机部署k8s集群"}},[s._v("#")]),s._v(" 虚拟机部署k8s集群")]),s._v(" "),n("blockquote",[n("p",[s._v("[域名ip查询] https://ip.tool.chinaz.com/raw.githubusercontent.com")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭防火墙")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl stop firewalld")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用开机启动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl disable firewalld")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用交换分区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# swapoff -a")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用selinux")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# setenforce 0 ")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# getenforce 0      ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/selinux/config")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#永久关闭selinux，在文档最后加下面这句")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SELINUX")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("disabled\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改hostname名称")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hostnamectl set-hostname $hostname")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立IP与主机名的映射")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/hosts")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.20")]),s._v(".73.73 k8s-master\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.20")]),s._v(".75.230 k8s-node1\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.20")]),s._v(".71.151 k8s-node2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 时间同步")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum -y install ntp")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl start ntpd")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl enable ntpd")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将桥接的IPv4流量传递到iptables的链")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# touch /etc/sysctl.d/k8s.conf")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat >> /etc/sysctl.d/k8s.conf <<EOF     ")]),s._v("\nnet.bridge.bridge-nf-call-ip6tables"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("                     \nnet.bridge.bridge-nf-call-iptables"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("                       \n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("net.ipv4.ip_forward")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("vm.swappiness")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nEOF\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载系统参数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sysctl --system")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装docker，k8s驱动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum list docker-ce --showduplicates | sort -r")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum -y install docker-ce docker-ce-cli containerd.io")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl start docker")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机启动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl enable docker")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/docker/daemon.json")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://b9pmyelo.mirror.aliyuncs.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",  \n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exec-opts"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"native.cgroupdriver=systemd"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("           \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl restart docker")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker info |tail -5")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# docker info | grep -i "Cgroup Driver"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用kubeadm安装k8s及相关工具")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat >/etc/yum.repos.d/kubernetes.repo <<EOF  ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("kubernetes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Kubernetes\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("repo_gpgcheck")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看可安装版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum list --showduplicates | grep  kubeadm")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装指定版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum -y install kubelet-1.22.6 kubeadm-1.22.6 kubectl-1.22.6")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机启动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl enable kubelet   ")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化master节点(MASTER)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubeadm init  --apiserver-advertise-address=8.141.175.100 --image-repository registry.aliyuncs.com/google_containers --kubernetes-version v1.22.6 --service-cidr=10.96.0.0/12 --pod-network-cidr=10.244.0.0/16")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p $HOME/.kube")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp -i /etc/kubernetes/admin.conf $HOME/.kube/config")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chown $(id -u):$(id -g) $HOME/.kube/config")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export KUBECONFIG=/etc/kubernetes/admin.conf")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp /etc/kubernetes/admin.conf k8s-node1:/etc/kubernetes/admin.conf")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp /etc/kubernetes/admin.conf k8s-node1:/etc/kubernetes/admin.conf")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将node节点加入集群，要在node节点机器上执行，node结点需要安装k8s相关组件，即kubeadm init之前的操作都需要执行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubeadm join 172.20.73.73:6443 --token 0416zv.g44s1xnloyi8xjvm --discovery-token-ca-cert-hash sha256:37349a9729af525fe5716148545561d447b0a06ff6f9e76c4bc8269c79748017 ")]),s._v("\n  \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署容器网络，CNI网络插件")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行下面这条命令在线配置pod网络，因为是国外网站，所以可能报错，测试去http://ip.tool.chinaz.com/网站查到")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#域名raw.githubusercontent.com对应的IP，把域名解析配置到/etc/hosts文件，然后执行在线配置pod网络，多尝试几次即可成功。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "185.199.110.133 raw.githubusercontent.com" >> /etc/hosts')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  查看运行状态          ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pods -n kube-system")]),s._v("\nNAME                                 READY   STATUS    RESTARTS   AGE\ncoredns-7f6cbbb7b8-2gwkr             "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          7m57s\ncoredns-7f6cbbb7b8-lwx8s             "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          7m57s\netcd-k8s-master                      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          8m11s\nkube-apiserver-k8s-master            "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          8m12s\nkube-controller-manager-k8s-master   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          8m11s\nkube-proxy-2wbds                     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          4m37s\nkube-proxy-9lqxn                     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          7m57s\nkube-proxy-jjbtr                     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          4m47s\nkube-scheduler-k8s-master            "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          8m11s\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证集群是否正常，要注意看对外暴露的端口号（自动生成的）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create deployment httpd --image=httpd")]),s._v("\ndeployment.apps/httpd created\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl expose deployment httpd --port=80 --type=NodePort")]),s._v("\nservice/httpd exposed\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pod,svc")]),s._v("\nNAME                         READY   STATUS    RESTARTS   AGE\npod/httpd-757fb56c8d-zq2fj   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          17s\n\nNAME                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        AGE\nservice/httpd        NodePort    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.106")]),s._v(".137.56   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":31537/TCP   7s\nservice/kubernetes   ClusterIP   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".0.1       "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("/TCP        9m9s\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装kubeboard")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master k8s-yaml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl apply -f https://kuboard.cn/install-script/kuboard-beta.yaml")]),s._v("\ndeployment.apps/kuboard created\nservice/kuboard created\nserviceaccount/kuboard-user created\nclusterrolebinding.rbac.authorization.k8s.io/kuboard-user created\nserviceaccount/kuboard-viewer created\nclusterrolebinding.rbac.authorization.k8s.io/kuboard-viewer created\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master k8s-yaml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep kuboard-user | awk '{print $1}')")]),s._v("\nName:         kuboard-user-token-6p88l\nNamespace:    kube-system\nLabels:       "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nAnnotations:  kubernetes.io/service-account.name: kuboard-user\n              kubernetes.io/service-account.uid: a980558e-fd23-4e0e-a757-c7bac989a34d\n\nType:  kubernetes.io/service-account-token\n\nData\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\nca.crt:     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1099")]),s._v(" bytes\nnamespace:  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" bytes\ntoken:      eyJhbGciOiJSUzI1NiIsImtpZCI6IlM4cFhRbW9Yb25HdGxzSm9HUWQwXzlfeUxXZVZ5UWZ4VHVxQUxwSnl3UXcifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJrdWJvYXJkLXVzZXItdG9rZW4tNnA4OGwiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoia3Vib2FyZC11c2VyIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiYTk4MDU1OGUtZmQyMy00ZTBlLWE3NTctYzdiYWM5ODlhMzRkIiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmUtc3lzdGVtOmt1Ym9hcmQtdXNlciJ9.q2fnZZN1-BN5QsLeoai1vQ3IkiuIeUTGt-lncgjFBZILxDoNRRQDlvIxPIvYu4PHGpbUf295vLRc5y0CvNizWAZqenb3exkuM4ahF0mNU68B2NYBnZ3No86GiFNj-pgrKpeaECHHERZn5I3h3aKupzYHlLgDes3-UATurf3UsgpUO7Gbp6xcT8OVDK_y81JnQLwXDIKEF09CbzgjF8EOn2_Gbi-zyapZQjVV3sDaRPs9-cXLRrD1n2FmRtYVb0fSCu_V0nnn_5gIy1OlI5wEHfUgrFOtEAg6B38AYyQamzQqPT6YIehpur1C7g9c5VCriOH1aAgj8WSAB31haeuvFw\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master k8s-yaml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc -n kube-system")]),s._v("\nNAME       TYPE        CLUSTER-IP       EXTERNAL-IP   PORT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                  AGE\nkube-dns   ClusterIP   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".0.10       "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v("/UDP,53/TCP,9153/TCP   76m\nkuboard    NodePort    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.102")]),s._v(".159.239   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":32567/TCP             21s\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问ip:32567")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br"),n("span",{staticClass:"line-number"},[s._v("136")]),n("br"),n("span",{staticClass:"line-number"},[s._v("137")]),n("br"),n("span",{staticClass:"line-number"},[s._v("138")]),n("br"),n("span",{staticClass:"line-number"},[s._v("139")]),n("br"),n("span",{staticClass:"line-number"},[s._v("140")]),n("br"),n("span",{staticClass:"line-number"},[s._v("141")]),n("br"),n("span",{staticClass:"line-number"},[s._v("142")]),n("br"),n("span",{staticClass:"line-number"},[s._v("143")]),n("br"),n("span",{staticClass:"line-number"},[s._v("144")]),n("br"),n("span",{staticClass:"line-number"},[s._v("145")]),n("br"),n("span",{staticClass:"line-number"},[s._v("146")]),n("br"),n("span",{staticClass:"line-number"},[s._v("147")]),n("br"),n("span",{staticClass:"line-number"},[s._v("148")]),n("br"),n("span",{staticClass:"line-number"},[s._v("149")]),n("br"),n("span",{staticClass:"line-number"},[s._v("150")]),n("br"),n("span",{staticClass:"line-number"},[s._v("151")]),n("br"),n("span",{staticClass:"line-number"},[s._v("152")]),n("br"),n("span",{staticClass:"line-number"},[s._v("153")]),n("br"),n("span",{staticClass:"line-number"},[s._v("154")]),n("br"),n("span",{staticClass:"line-number"},[s._v("155")]),n("br"),n("span",{staticClass:"line-number"},[s._v("156")]),n("br"),n("span",{staticClass:"line-number"},[s._v("157")]),n("br"),n("span",{staticClass:"line-number"},[s._v("158")]),n("br"),n("span",{staticClass:"line-number"},[s._v("159")]),n("br"),n("span",{staticClass:"line-number"},[s._v("160")]),n("br"),n("span",{staticClass:"line-number"},[s._v("161")]),n("br"),n("span",{staticClass:"line-number"},[s._v("162")]),n("br"),n("span",{staticClass:"line-number"},[s._v("163")]),n("br"),n("span",{staticClass:"line-number"},[s._v("164")]),n("br")])]),n("h4",{attrs:{id:"清除node结点环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#清除node结点环境"}},[s._v("#")]),s._v(" 清除node结点环境")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n kubeadm reset\n ​\n systemctl stop kubelet\n ​\n systemctl stop "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n ​\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /var/lib/cni/\n ​\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /var/lib/kubelet/*\n ​\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /etc/cni/\n ​\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" cni0 down\n ​\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" flannel.1 down\n ​\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" docker0 down\n ​\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" delete cni0\n ​\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" delete flannel.1\n ​\n systemctl start "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n ​\n systemctl start kubelet\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);