const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"汽车类型","menuJump":"列表","tableName":"qicheleixing"}],"menu":"汽车类型管理"},{"child":[{"buttons":["新增","查看","修改","删除","保险","违章"],"menu":"汽车信息","menuJump":"列表","tableName":"qichexinxi"}],"menu":"汽车信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"租赁信息","menuJump":"列表","tableName":"zulinxinxi"}],"menu":"租赁信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"续租信息","menuJump":"列表","tableName":"xuzuxinxi"}],"menu":"续租信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"归还信息","menuJump":"列表","tableName":"guihaixinxi"}],"menu":"归还信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"保险信息","menuJump":"列表","tableName":"baoxianxinxi"}],"menu":"保险信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"违章记录","menuJump":"列表","tableName":"weizhangjilu"}],"menu":"违章记录管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"新闻资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","租赁"],"menu":"汽车信息列表","menuJump":"列表","tableName":"qichexinxi"}],"menu":"汽车信息模块"}],"roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","修改","支付","续租","归还","删除"],"menu":"租赁信息","menuJump":"列表","tableName":"zulinxinxi"}],"menu":"租赁信息管理"},{"child":[{"buttons":["查看","修改","删除","支付"],"menu":"续租信息","menuJump":"列表","tableName":"xuzuxinxi"}],"menu":"续租信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"归还信息","menuJump":"列表","tableName":"guihaixinxi"}],"menu":"归还信息管理"},{"child":[{"buttons":["查看","审核"],"menu":"违章记录","menuJump":"列表","tableName":"weizhangjilu"}],"menu":"违章记录管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看","租赁"],"menu":"汽车信息列表","menuJump":"列表","tableName":"qichexinxi"}],"menu":"汽车信息模块"}],"roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;
