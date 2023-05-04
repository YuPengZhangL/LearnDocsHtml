var fs = require('fs')
// 设计模式
const designFiles = fs.readdirSync('./docs/doc/design_patterns')
const designMdArr = designFiles.filter(f => /\.md$/.test(f)&& !f.includes('README'))
// docker
const dockerFiles = fs.readdirSync('./docs/doc/docker')
const dockerMdArr = dockerFiles.filter(f => /\.md$/.test(f)&& !f.includes('README'))
// es
const esFiles = fs.readdirSync('./docs/doc/es')
const esMdArr = esFiles.filter(f => /\.md$/.test(f)&& !f.includes('README'))
// etcd
const etcdFiles = fs.readdirSync('./docs/doc/etcd')
const etcdMdArr = etcdFiles.filter(f => /\.md$/.test(f)&& !f.includes('README'))
// go
const goFiles = fs.readdirSync('./docs/doc/golang')
const goMdArr = goFiles.filter(f => /\.md$/.test(f)&& !f.includes('README'))
// kafka
const kafkaFiles = fs.readdirSync('./docs/doc/kafka')
const kafkaMdArr = kafkaFiles.filter(f => /\.md$/.test(f)&& !f.includes('README'))
// k8s
const k8sFiles = fs.readdirSync('./docs/doc/kubernetes')
const k8sMdArr = k8sFiles.filter(f => /\.md$/.test(f)&& !f.includes('README'))
// mongo
const mongoFiles = fs.readdirSync('./docs/doc/mongodb')
const mongoMdArr = mongoFiles.filter(f => /\.md$/.test(f)&& !f.includes('README'))
// mysql
const mysqlFiles = fs.readdirSync('./docs/doc/mysql')
const mysqlMdArr = mysqlFiles.filter(f => /\.md$/.test(f)&& !f.includes('README'))
// network
const networkFiles = fs.readdirSync('./docs/doc/network')
const networkMdArr = networkFiles.filter(f => /\.md$/.test(f)&& !f.includes('README'))
// nginx
const nginxFiles = fs.readdirSync('./docs/doc/nginx')
const nginxMdArr = nginxFiles.filter(f => /\.md$/.test(f)&& !f.includes('README'))
// postgresql
const postgresqlFiles = fs.readdirSync('./docs/doc/postgresql')
const postgresqlMdArr = postgresqlFiles.filter(f => /\.md$/.test(f)&& !f.includes('README'))
// redis
const redisFiles = fs.readdirSync('./docs/doc/redis')
const redisMdArr = redisFiles.filter(f => /\.md$/.test(f)&& !f.includes('README'))
// zookeeper
const zookeeperFiles = fs.readdirSync('./docs/doc/zookeeper')
const zookeeperMdArr = zookeeperFiles.filter(f => /\.md$/.test(f)&& !f.includes('README'))

module.exports = {
	/**
	 * API文档名列表
	 */
	 designMdArr,
	 dockerMdArr,
	 esMdArr,
	 etcdMdArr,
	 goMdArr,
	 kafkaMdArr,
	 k8sMdArr,
	 mongoMdArr,
	 mysqlMdArr,
	 networkMdArr,
	 nginxMdArr,
	 postgresqlMdArr,
	 redisMdArr,
	 zookeeperMdArr,
	 
}
