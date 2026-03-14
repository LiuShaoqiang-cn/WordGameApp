// 扩展的字词库，分为不同难度等级
const wordLibrary = [
    // 第1级 (基础汉字 - 120个)
    [
        {"char": "大", "pinyin": "dà"},
        {"char": "小", "pinyin": "xiǎo"},
        {"char": "天", "pinyin": "tiān"},
        {"char": "地", "pinyin": "dì"},
        {"char": "人", "pinyin": "rén"},
        {"char": "手", "pinyin": "shǒu"},
        {"char": "水", "pinyin": "shuǐ"},
        {"char": "火", "pinyin": "huǒ"},
        {"char": "山", "pinyin": "shān"},
        {"char": "月", "pinyin": "yuè"},
        {"char": "日", "pinyin": "rì"},
        {"char": "口", "pinyin": "kǒu"},
        {"char": "木", "pinyin": "mù"},
        {"char": "金", "pinyin": "jīn"},
        {"char": "土", "pinyin": "tǔ"},
        {"char": "田", "pinyin": "tián"},
        {"char": "车", "pinyin": "chē"},
        {"char": "马", "pinyin": "mǎ"},
        {"char": "牛", "pinyin": "niú"},
        {"char": "羊", "pinyin": "yáng"},
        {"char": "鸟", "pinyin": "niǎo"},
        {"char": "虫", "pinyin": "chóng"},
        {"char": "鱼", "pinyin": "yú"},
        {"char": "犬", "pinyin": "quǎn"},
        {"char": "门", "pinyin": "mén"},
        {"char": "户", "pinyin": "hù"},
        {"char": "刀", "pinyin": "dāo"},
        {"char": "力", "pinyin": "lì"},
        {"char": "工", "pinyin": "gōng"},
        {"char": "士", "pinyin": "shì"},
        {"char": "上", "pinyin": "shàng"},
        {"char": "下", "pinyin": "xià"},
        {"char": "左", "pinyin": "zuǒ"},
        {"char": "右", "pinyin": "yòu"},
        {"char": "东", "pinyin": "dōng"},
        {"char": "西", "pinyin": "xī"},
        {"char": "南", "pinyin": "nán"},
        {"char": "北", "pinyin": "běi"},
        {"char": "中", "pinyin": "zhōng"},
        {"char": "一", "pinyin": "yī"},
        {"char": "二", "pinyin": "èr"},
        {"char": "三", "pinyin": "sān"},
        {"char": "四", "pinyin": "sì"},
        {"char": "五", "pinyin": "wǔ"},
        {"char": "六", "pinyin": "liù"},
        {"char": "七", "pinyin": "qī"},
        {"char": "八", "pinyin": "bā"},
        {"char": "九", "pinyin": "jiǔ"},
        {"char": "十", "pinyin": "shí"},
        {"char": "百", "pinyin": "bǎi"},
        {"char": "千", "pinyin": "qiān"},
        {"char": "万", "pinyin": "wàn"},
        {"char": "子", "pinyin": "zǐ"},
        {"char": "女", "pinyin": "nǚ"},
        {"char": "男", "pinyin": "nán"},
        {"char": "父", "pinyin": "fù"},
        {"char": "母", "pinyin": "mǔ"},
        {"char": "儿", "pinyin": "ér"},
        {"char": "老", "pinyin": "lǎo"},
        {"char": "幼", "pinyin": "yòu"},
        {"char": "长", "pinyin": "zhǎng"},
        {"char": "短", "pinyin": "duǎn"},
        {"char": "高", "pinyin": "gāo"},
        {"char": "低", "pinyin": "dī"},
        {"char": "宽", "pinyin": "kuān"},
        {"char": "窄", "pinyin": "zhǎi"},
        {"char": "新", "pinyin": "xīn"},
        {"char": "旧", "pinyin": "jiù"},
        {"char": "好", "pinyin": "hǎo"},
        {"char": "坏", "pinyin": "huài"},
        {"char": "美", "pinyin": "měi"},
        {"char": "丑", "pinyin": "chǒu"},
        {"char": "冷", "pinyin": "lěng"},
        {"char": "热", "pinyin": "rè"},
        {"char": "干", "pinyin": "gān"},
        {"char": "湿", "pinyin": "shī"},
        {"char": "轻", "pinyin": "qīng"},
        {"char": "重", "pinyin": "zhòng"},
        {"char": "快", "pinyin": "kuài"},
        {"char": "慢", "pinyin": "màn"},
        {"char": "早", "pinyin": "zǎo"},
        {"char": "晚", "pinyin": "wǎn"},
        {"char": "春", "pinyin": "chūn"},
        {"char": "夏", "pinyin": "xià"},
        {"char": "秋", "pinyin": "qiū"},
        {"char": "冬", "pinyin": "dōng"},
        {"char": "年", "pinyin": "nián"},
        {"char": "月", "pinyin": "yuè"},
        {"char": "日", "pinyin": "rì"},
        {"char": "时", "pinyin": "shí"},
        {"char": "分", "pinyin": "fēn"},
        {"char": "秒", "pinyin": "miǎo"},
        {"char": "里", "pinyin": "lǐ"},
        {"char": "外", "pinyin": "wài"},
        {"char": "前", "pinyin": "qián"},
        {"char": "后", "pinyin": "hòu"},
        {"char": "来", "pinyin": "lái"},
        {"char": "去", "pinyin": "qù"},
        {"char": "回", "pinyin": "huí"},
        {"char": "走", "pinyin": "zǒu"},
        {"char": "跑", "pinyin": "pǎo"},
        {"char": "跳", "pinyin": "tiào"},
        {"char": "坐", "pinyin": "zuò"},
        {"char": "立", "pinyin": "lì"},
        {"char": "站", "pinyin": "zhàn"},
        {"char": "睡", "pinyin": "shuì"},
        {"char": "醒", "pinyin": "xǐng"},
        {"char": "吃", "pinyin": "chī"},
        {"char": "喝", "pinyin": "hē"},
        {"char": "穿", "pinyin": "chuān"},
        {"char": "脱", "pinyin": "tuō"},
        {"char": "洗", "pinyin": "xǐ"},
        {"char": "看", "pinyin": "kàn"},
        {"char": "听", "pinyin": "tīng"},
        {"char": "说", "pinyin": "shuō"},
        {"char": "读", "pinyin": "dú"},
        {"char": "写", "pinyin": "xiě"},
        {"char": "学", "pinyin": "xué"},
        {"char": "教", "pinyin": "jiāo"},
        {"char": "爱", "pinyin": "ài"},
        {"char": "恨", "pinyin": "hèn"},
        {"char": "笑", "pinyin": "xiào"},
        {"char": "哭", "pinyin": "kū"},
        {"char": "喜", "pinyin": "xǐ"},
        {"char": "怒", "pinyin": "nù"},
        {"char": "哀", "pinyin": "āi"},
        {"char": "乐", "pinyin": "lè"}
    ],
    
    // 第2级 (日常用品 - 120个)
    [
        {"char": "花", "pinyin": "huā"},
        {"char": "草", "pinyin": "cǎo"},
        {"char": "树", "pinyin": "shù"},
        {"char": "桥", "pinyin": "qiáo"},
        {"char": "路", "pinyin": "lù"},
        {"char": "房", "pinyin": "fáng"},
        {"char": "屋", "pinyin": "wū"},
        {"char": "床", "pinyin": "chuáng"},
        {"char": "椅", "pinyin": "yǐ"},
        {"char": "桌", "pinyin": "zhuō"},
        {"char": "柜", "pinyin": "guì"},
        {"char": "灯", "pinyin": "dēng"},
        {"char": "窗", "pinyin": "chuāng"},
        {"char": "墙", "pinyin": "qiáng"},
        {"char": "门", "pinyin": "mén"},
        {"char": "锁", "pinyin": "suǒ"},
        {"char": "钥", "pinyin": "yào"},
        {"char": "锅", "pinyin": "guō"},
        {"char": "碗", "pinyin": "wǎn"},
        {"char": "筷", "pinyin": "kuài"},
        {"char": "勺", "pinyin": "sháo"},
        {"char": "盆", "pinyin": "pén"},
        {"char": "桶", "pinyin": "tǒng"},
        {"char": "瓶", "pinyin": "píng"},
        {"char": "杯", "pinyin": "bēi"},
        {"char": "盘", "pinyin": "pán"},
        {"char": "碟", "pinyin": "dié"},
        {"char": "刀", "pinyin": "dāo"},
        {"char": "叉", "pinyin": "chā"},
        {"char": "针", "pinyin": "zhēn"},
        {"char": "线", "pinyin": "xiàn"},
        {"char": "布", "pinyin": "bù"},
        {"char": "衣", "pinyin": "yī"},
        {"char": "裤", "pinyin": "kù"},
        {"char": "鞋", "pinyin": "xié"},
        {"char": "帽", "pinyin": "mào"},
        {"char": "袜", "pinyin": "wà"},
        {"char": "巾", "pinyin": "jīn"},
        {"char": "纸", "pinyin": "zhǐ"},
        {"char": "笔", "pinyin": "bǐ"},
        {"char": "墨", "pinyin": "mò"},
        {"char": "书", "pinyin": "shū"},
        {"char": "画", "pinyin": "huà"},
        {"char": "琴", "pinyin": "qín"},
        {"char": "棋", "pinyin": "qí"},
        {"char": "球", "pinyin": "qiú"},
        {"char": "网", "pinyin": "wǎng"},
        {"char": "电", "pinyin": "diàn"},
        {"char": "视", "pinyin": "shì"},
        {"char": "机", "pinyin": "jī"},
        {"char": "表", "pinyin": "biǎo"},
        {"char": "钟", "pinyin": "zhōng"},
        {"char": "镜", "pinyin": "jìng"},
        {"char": "梳", "pinyin": "shū"},
        {"char": "牙", "pinyin": "yá"},
        {"char": "刷", "pinyin": "shuā"},
        {"char": "肥", "pinyin": "féi"},
        {"char": "皂", "pinyin": "zào"},
        {"char": "香", "pinyin": "xiāng"},
        {"char": "味", "pinyin": "wèi"},
        {"char": "盐", "pinyin": "yán"},
        {"char": "糖", "pinyin": "táng"},
        {"char": "醋", "pinyin": "cù"},
        {"char": "酱", "pinyin": "jiàng"},
        {"char": "油", "pinyin": "yóu"},
        {"char": "米", "pinyin": "mǐ"},
        {"char": "面", "pinyin": "miàn"},
        {"char": "包", "pinyin": "bāo"},
        {"char": "袋", "pinyin": "dài"},
        {"char": "箱", "pinyin": "xiāng"},
        {"char": "盒", "pinyin": "hé"},
        {"char": "篮", "pinyin": "lán"},
        {"char": "罐", "pinyin": "guàn"},
        {"char": "壶", "pinyin": "hú"},
        {"char": "炉", "pinyin": "lú"},
        {"char": "灶", "pinyin": "zào"},
        {"char": "烟", "pinyin": "yān"},
        {"char": "汽", "pinyin": "qì"},
        {"char": "冰", "pinyin": "bīng"},
        {"char": "雪", "pinyin": "xuě"},
        {"char": "风", "pinyin": "fēng"},
        {"char": "雨", "pinyin": "yǔ"},
        {"char": "云", "pinyin": "yún"},
        {"char": "雷", "pinyin": "léi"},
        {"char": "光", "pinyin": "guāng"},
        {"char": "影", "pinyin": "yǐng"},
        {"char": "声", "pinyin": "shēng"},
        {"char": "音", "pinyin": "yīn"},
        {"char": "乐", "pinyin": "yuè"},
        {"char": "歌", "pinyin": "gē"},
        {"char": "舞", "pinyin": "wǔ"},
        {"char": "戏", "pinyin": "xì"},
        {"char": "剧", "pinyin": "jù"},
        {"char": "报", "pinyin": "bào"},
        {"char": "刊", "pinyin": "kān"},
        {"char": "杂", "pinyin": "zá"},
        {"char": "志", "pinyin": "zhì"},
        {"char": "册", "pinyin": "cè"},
        {"char": "页", "pinyin": "yè"},
        {"char": "章", "pinyin": "zhāng"},
        {"char": "节", "pinyin": "jié"},
        {"char": "段", "pinyin": "duàn"},
        {"char": "句", "pinyin": "jù"},
        {"char": "词", "pinyin": "cí"},
        {"char": "字", "pinyin": "zì"},
        {"char": "号", "pinyin": "hào"},
        {"char": "名", "pinyin": "míng"},
        {"char": "姓", "pinyin": "xìng"},
        {"char": "国", "pinyin": "guó"},
        {"char": "家", "pinyin": "jiā"},
        {"char": "乡", "pinyin": "xiāng"},
        {"char": "村", "pinyin": "cūn"},
        {"char": "镇", "pinyin": "zhèn"},
        {"char": "市", "pinyin": "shì"},
        {"char": "省", "pinyin": "shěng"},
        {"char": "区", "pinyin": "qū"},
        {"char": "县", "pinyin": "xiàn"}
    ],
    
    // 第3级 (动物 - 120个)
    [
        {"char": "猫", "pinyin": "māo"},
        {"char": "狗", "pinyin": "gǒu"},
        {"char": "鸡", "pinyin": "jī"},
        {"char": "鸭", "pinyin": "yā"},
        {"char": "鹅", "pinyin": "é"},
        {"char": "猪", "pinyin": "zhū"},
        {"char": "牛", "pinyin": "niú"},
        {"char": "羊", "pinyin": "yáng"},
        {"char": "马", "pinyin": "mǎ"},
        {"char": "驴", "pinyin": "lǘ"},
        {"char": "骡", "pinyin": "luó"},
        {"char": "兔", "pinyin": "tù"},
        {"char": "鼠", "pinyin": "shǔ"},
        {"char": "狐", "pinyin": "hú"},
        {"char": "狼", "pinyin": "láng"},
        {"char": "虎", "pinyin": "hǔ"},
        {"char": "豹", "pinyin": "bào"},
        {"char": "狮", "pinyin": "shī"},
        {"char": "象", "pinyin": "xiàng"},
        {"char": "熊", "pinyin": "xióng"},
        {"char": "猴", "pinyin": "hóu"},
        {"char": "猿", "pinyin": "yuán"},
        {"char": "猩", "pinyin": "xīng"},
        {"char": "鹿", "pinyin": "lù"},
        {"char": "驼", "pinyin": "tuó"},
        {"char": "犀", "pinyin": "xī"},
        {"char": "鹰", "pinyin": "yīng"},
        {"char": "鸽", "pinyin": "gē"},
        {"char": "燕", "pinyin": "yàn"},
        {"char": "雀", "pinyin": "què"},
        {"char": "鸦", "pinyin": "yā"},
        {"char": "鹊", "pinyin": "què"},
        {"char": "雁", "pinyin": "yàn"},
        {"char": "鹤", "pinyin": "hè"},
        {"char": "鸥", "pinyin": "ōu"},
        {"char": "鸳", "pinyin": "yuān"},
        {"char": "鸯", "pinyin": "yāng"},
        {"char": "莺", "pinyin": "yīng"},
        {"char": "鹂", "pinyin": "lí"},
        {"char": "鹃", "pinyin": "juān"},
        {"char": "鸟", "pinyin": "niǎo"},
        {"char": "鱼", "pinyin": "yú"},
        {"char": "虾", "pinyin": "xiā"},
        {"char": "蟹", "pinyin": "xiè"},
        {"char": "贝", "pinyin": "bèi"},
        {"char": "螺", "pinyin": "luó"},
        {"char": "蚌", "pinyin": "bàng"},
        {"char": "鲸", "pinyin": "jīng"},
        {"char": "鲨", "pinyin": "shā"},
        {"char": "鳅", "pinyin": "qiū"},
        {"char": "鳝", "pinyin": "shàn"},
        {"char": "蛙", "pinyin": "wā"},
        {"char": "蟾", "pinyin": "chán"},
        {"char": "蚓", "pinyin": "yǐn"},
        {"char": "蝉", "pinyin": "chán"},
        {"char": "蝶", "pinyin": "dié"},
        {"char": "蛾", "pinyin": "é"},
        {"char": "蜂", "pinyin": "fēng"},
        {"char": "蚁", "pinyin": "yǐ"},
        {"char": "蚊", "pinyin": "wén"},
        {"char": "蝇", "pinyin": "yíng"},
        {"char": "蛇", "pinyin": "shé"},
        {"char": "蜥", "pinyin": "xī"},
        {"char": "蜴", "pinyin": "yì"},
        {"char": "龟", "pinyin": "guī"},
        {"char": "鳖", "pinyin": "biē"},
        {"char": "龙", "pinyin": "lóng"},
        {"char": "凤", "pinyin": "fèng"},
        {"char": "麒", "pinyin": "qí"},
        {"char": "麟", "pinyin": "lín"},
        {"char": "雕", "pinyin": "diāo"},
        {"char": "隼", "pinyin": "sǔn"},
        {"char": "鹫", "pinyin": "jiù"},
        {"char": "鹳", "pinyin": "guàn"},
        {"char": "鹈", "pinyin": "tí"},
        {"char": "鹕", "pinyin": "hú"},
        {"char": "鸬", "pinyin": "lú"},
        {"char": "鹚", "pinyin": "cí"},
        {"char": "鹦", "pinyin": "yīng"},
        {"char": "鹉", "pinyin": "wǔ"},
        {"char": "鹩", "pinyin": "liáo"},
        {"char": "鹛", "pinyin": "méi"},
        {"char": "鸲", "pinyin": "qú"},
        {"char": "鹆", "pinyin": "yù"},
        {"char": "鹇", "pinyin": "xián"},
        {"char": "鹑", "pinyin": "chún"},
        {"char": "鸨", "pinyin": "bǎo"},
        {"char": "鹭", "pinyin": "lù"},
        {"char": "鹗", "pinyin": "è"},
        {"char": "鸱", "pinyin": "chī"},
        {"char": "鸺", "pinyin": "xiū"},
        {"char": "鹠", "pinyin": "liú"},
        {"char": "鹞", "pinyin": "yào"},
        {"char": "鸢", "pinyin": "yuān"},
        {"char": "鹄", "pinyin": "hú"},
        {"char": "天鹅", "pinyin": "tiān é"},
        {"char": "孔雀", "pinyin": "kǒng què"},
        {"char": "锦鸡", "pinyin": "jǐn jī"},
        {"char": "白鹭", "pinyin": "bái lù"},
        {"char": "丹顶鹤", "pinyin": "dān dǐng hè"},
        {"char": "朱鹮", "pinyin": "zhū huán"},
        {"char": "熊猫", "pinyin": "xióng māo"},
        {"char": "金丝猴", "pinyin": "jīn sī hóu"},
        {"char": "华南虎", "pinyin": "huá nán hǔ"},
        {"char": "东北虎", "pinyin": "dōng běi hǔ"},
        {"char": "藏羚羊", "pinyin": "zàng líng yáng"},
        {"char": "梅花鹿", "pinyin": "méi huā lù"},
        {"char": "长颈鹿", "pinyin": "cháng jǐng lù"},
        {"char": "斑马", "pinyin": "bān mǎ"},
        {"char": "河马", "pinyin": "hé mǎ"},
        {"char": "犀牛", "pinyin": "xī niú"},
        {"char": "袋鼠", "pinyin": "dài shǔ"},
        {"char": "考拉", "pinyin": "kǎo lā"},
        {"char": "企鹅", "pinyin": "qǐ é"},
        {"char": "北极熊", "pinyin": "běi jí xióng"},
        {"char": "海豚", "pinyin": "hǎi tún"},
        {"char": "海豹", "pinyin": "hǎi bào"},
        {"char": "海狮", "pinyin": "hǎi shī"},
        {"char": "鲨鱼", "pinyin": "shā yú"},
        {"char": "鲸鱼", "pinyin": "jīng yú"},
        {"char": "章鱼", "pinyin": "zhāng yú"},
        {"char": "乌贼", "pinyin": "wū zéi"},
        {"char": "海星", "pinyin": "hǎi xīng"},
        {"char": "海马", "pinyin": "hǎi mǎ"},
        {"char": "水母", "pinyin": "shuǐ mǔ"},
        {"char": "海龟", "pinyin": "hǎi guī"},
        {"char": "玳瑁", "pinyin": "dài mào"},
        {"char": "珊瑚", "pinyin": "shān hú"},
        {"char": "海葵", "pinyin": "hǎi kuí"},
        {"char": "水螅", "pinyin": "shuǐ xī"}
    ],
    
    // 第4级 (食物 - 120个)
    [
        {"char": "米", "pinyin": "mǐ"},
        {"char": "面", "pinyin": "miàn"},
        {"char": "菜", "pinyin": "cài"},
        {"char": "肉", "pinyin": "ròu"},
        {"char": "蛋", "pinyin": "dàn"},
        {"char": "奶", "pinyin": "nǎi"},
        {"char": "糖", "pinyin": "táng"},
        {"char": "盐", "pinyin": "yán"},
        {"char": "茶", "pinyin": "chá"},
        {"char": "酒", "pinyin": "jiǔ"},
        {"char": "饭", "pinyin": "fàn"},
        {"char": "汤", "pinyin": "tāng"},
        {"char": "粥", "pinyin": "zhōu"},
        {"char": "饼", "pinyin": "bǐng"},
        {"char": "包", "pinyin": "bāo"},
        {"char": "饺", "pinyin": "jiǎo"},
        {"char": "馒头", "pinyin": "mán tou"},
        {"char": "糕", "pinyin": "gāo"},
        {"char": "团", "pinyin": "tuán"},
        {"char": "圆", "pinyin": "yuán"},
        {"char": "粉", "pinyin": "fěn"},
        {"char": "条", "pinyin": "tiáo"},
        {"char": "丝", "pinyin": "sī"},
        {"char": "块", "pinyin": "kuài"},
        {"char": "片", "pinyin": "piàn"},
        {"char": "粒", "pinyin": "lì"},
        {"char": "颗", "pinyin": "kē"},
        {"char": "果", "pinyin": "guǒ"},
        {"char": "蔬", "pinyin": "shū"},
        {"char": "瓜", "pinyin": "guā"},
        {"char": "豆", "pinyin": "dòu"},
        {"char": "麦", "pinyin": "mài"},
        {"char": "稻", "pinyin": "dào"},
        {"char": "谷", "pinyin": "gǔ"},
        {"char": "油", "pinyin": "yóu"},
        {"char": "醋", "pinyin": "cù"},
        {"char": "酱", "pinyin": "jiàng"},
        {"char": "料", "pinyin": "liào"},
        {"char": "调", "pinyin": "tiáo"},
        {"char": "味", "pinyin": "wèi"},
        {"char": "香", "pinyin": "xiāng"},
        {"char": "辣", "pinyin": "là"},
        {"char": "酸", "pinyin": "suān"},
        {"char": "甜", "pinyin": "tián"},
        {"char": "苦", "pinyin": "kǔ"},
        {"char": "咸", "pinyin": "xián"},
        {"char": "淡", "pinyin": "dàn"},
        {"char": "鲜", "pinyin": "xiān"},
        {"char": "嫩", "pinyin": "nèn"},
        {"char": "酥", "pinyin": "sū"},
        {"char": "脆", "pinyin": "cuì"},
        {"char": "软", "pinyin": "ruǎn"},
        {"char": "硬", "pinyin": "yìng"},
        {"char": "热", "pinyin": "rè"},
        {"char": "冷", "pinyin": "lěng"},
        {"char": "温", "pinyin": "wēn"},
        {"char": "凉", "pinyin": "liáng"},
        {"char": "烫", "pinyin": "tàng"},
        {"char": "冻", "pinyin": "dòng"},
        {"char": "蒸", "pinyin": "zhēng"},
        {"char": "煮", "pinyin": "zhǔ"},
        {"char": "炒", "pinyin": "chǎo"},
        {"char": "炸", "pinyin": "zhá"},
        {"char": "烤", "pinyin": "kǎo"},
        {"char": "烧", "pinyin": "shāo"},
        {"char": "炖", "pinyin": "dùn"},
        {"char": "焖", "pinyin": "mèn"},
        {"char": "拌", "pinyin": "bàn"},
        {"char": "腌", "pinyin": "yān"},
        {"char": "卤", "pinyin": "lǔ"},
        {"char": "熏", "pinyin": "xūn"},
        {"char": "泡", "pinyin": "pào"},
        {"char": "冲", "pinyin": "chōng"},
        {"char": "煎", "pinyin": "jiān"},
        {"char": "熬", "pinyin": "áo"},
        {"char": "苹果", "pinyin": "píng guǒ"},
        {"char": "香蕉", "pinyin": "xiāng jiāo"},
        {"char": "橘子", "pinyin": "jú zi"},
        {"char": "橙子", "pinyin": "chéng zi"},
        {"char": "梨", "pinyin": "lí"},
        {"char": "桃", "pinyin": "táo"},
        {"char": "李", "pinyin": "lǐ"},
        {"char": "杏", "pinyin": "xìng"},
        {"char": "葡萄", "pinyin": "pú táo"},
        {"char": "草莓", "pinyin": "cǎo méi"},
        {"char": "西瓜", "pinyin": "xī guā"},
        {"char": "哈密瓜", "pinyin": "hā mì guā"},
        {"char": "菠萝", "pinyin": "bō luó"},
        {"char": "芒果", "pinyin": "máng guǒ"},
        {"char": "柠檬", "pinyin": "níng méng"},
        {"char": "椰子", "pinyin": "yē zi"},
        {"char": "榴莲", "pinyin": "liú lián"},
        {"char": "荔枝", "pinyin": "lì zhī"},
        {"char": "龙眼", "pinyin": "lóng yǎn"},
        {"char": "樱桃", "pinyin": "yīng táo"},
        {"char": "猕猴桃", "pinyin": "mí hóu táo"},
        {"char": "火龙果", "pinyin": "huǒ lóng guǒ"},
        {"char": "山竹", "pinyin": "shān zhú"},
        {"char": "百香果", "pinyin": "bǎi xiāng guǒ"},
        {"char": "木瓜", "pinyin": "mù guā"},
        {"char": "番石榴", "pinyin": "fān shí liu"},
        {"char": "柿子", "pinyin": "shì zi"},
        {"char": "石榴", "pinyin": "shí liu"},
        {"char": "桑葚", "pinyin": "sāng shèn"},
        {"char": "蓝莓", "pinyin": "lán méi"},
        {"char": "黑莓", "pinyin": "hēi méi"},
        {"char": "覆盆子", "pinyin": "fù pén zi"},
        {"char": "杨梅", "pinyin": "yáng méi"},
        {"char": "青梅", "pinyin": "qīng méi"},
        {"char": "橄榄", "pinyin": "gǎn lǎn"},
        {"char": "无花果", "pinyin": "wú huā guǒ"},
        {"char": "枣", "pinyin": "zǎo"},
        {"char": "核桃", "pinyin": "hé táo"},
        {"char": "杏仁", "pinyin": "xìng rén"},
        {"char": "花生", "pinyin": "huā shēng"},
        {"char": "腰果", "pinyin": "yāo guǒ"},
        {"char": "开心果", "pinyin": "kāi xīn guǒ"},
        {"char": "榛子", "pinyin": "zhēn zi"},
        {"char": "松子", "pinyin": "sōng zi"},
        {"char": "瓜子", "pinyin": "guā zǐ"},
        {"char": "板栗", "pinyin": "bǎn lì"},
        {"char": "莲子", "pinyin": "lián zǐ"},
        {"char": "银杏", "pinyin": "yín xìng"},
        {"char": "莲藕", "pinyin": "lián ǒu"},
        {"char": "荸荠", "pinyin": "bí qí"},
        {"char": "菱角", "pinyin": "líng jiǎo"},
        {"char": "芋头", "pinyin": "yù tou"},
        {"char": "山药", "pinyin": "shān yào"},
        {"char": "红薯", "pinyin": "hóng shǔ"},
        {"char": "土豆", "pinyin": "tǔ dòu"},
        {"char": "萝卜", "pinyin": "luó bo"},
        {"char": "胡萝卜", "pinyin": "hú luó bo"},
        {"char": "白菜", "pinyin": "bái cài"},
        {"char": "青菜", "pinyin": "qīng cài"},
        {"char": "芹菜", "pinyin": "qín cài"},
        {"char": "韭菜", "pinyin": "jiǔ cài"},
        {"char": "菠菜", "pinyin": "bō cài"},
        {"char": "生菜", "pinyin": "shēng cài"},
        {"char": "卷心菜", "pinyin": "juǎn xīn cài"},
        {"char": "洋葱", "pinyin": "yáng cōng"},
        {"char": "大蒜", "pinyin": "dà suàn"},
        {"char": "生姜", "pinyin": "shēng jiāng"},
        {"char": "辣椒", "pinyin": "là jiāo"},
        {"char": "胡椒", "pinyin": "hú jiāo"},
        {"char": "花椒", "pinyin": "huā jiāo"},
        {"char": "八角", "pinyin": "bā jiǎo"},
        {"char": "桂皮", "pinyin": "guì pí"},
        {"char": "丁香", "pinyin": "dīng xiāng"},
        {"char": "茴香", "pinyin": "huí xiāng"},
        {"char": "香菜", "pinyin": "xiāng cài"},
        {"char": "薄荷", "pinyin": "bò he"}
    ],
    
    // 第5级 (颜色与形容词 - 120个)
    [
        {"char": "红", "pinyin": "hóng"},
        {"char": "绿", "pinyin": "lǜ"},
        {"char": "蓝", "pinyin": "lán"},
        {"char": "黄", "pinyin": "huáng"},
        {"char": "黑", "pinyin": "hēi"},
        {"char": "白", "pinyin": "bái"},
        {"char": "好", "pinyin": "hǎo"},
        {"char": "坏", "pinyin": "huài"},
        {"char": "快", "pinyin": "kuài"},
        {"char": "慢", "pinyin": "màn"},
        {"char": "新", "pinyin": "xīn"},
        {"char": "旧", "pinyin": "jiù"},
        {"char": "大", "pinyin": "dà"},
        {"char": "小", "pinyin": "xiǎo"},
        {"char": "高", "pinyin": "gāo"},
        {"char": "矮", "pinyin": "ǎi"},
        {"char": "长", "pinyin": "cháng"},
        {"char": "短", "pinyin": "duǎn"},
        {"char": "宽", "pinyin": "kuān"},
        {"char": "窄", "pinyin": "zhǎi"},
        {"char": "厚", "pinyin": "hòu"},
        {"char": "薄", "pinyin": "báo"},
        {"char": "深", "pinyin": "shēn"},
        {"char": "浅", "pinyin": "qiǎn"},
        {"char": "重", "pinyin": "zhòng"},
        {"char": "轻", "pinyin": "qīng"},
        {"char": "热", "pinyin": "rè"},
        {"char": "冷", "pinyin": "lěng"},
        {"char": "暖", "pinyin": "nuǎn"},
        {"char": "凉", "pinyin": "liáng"},
        {"char": "干", "pinyin": "gān"},
        {"char": "湿", "pinyin": "shī"},
        {"char": "软", "pinyin": "ruǎn"},
        {"char": "硬", "pinyin": "yìng"},
        {"char": "粗", "pinyin": "cū"},
        {"char": "细", "pinyin": "xì"},
        {"char": "美", "pinyin": "měi"},
        {"char": "丑", "pinyin": "chǒu"},
        {"char": "善", "pinyin": "shàn"},
        {"char": "恶", "pinyin": "è"},
        {"char": "正", "pinyin": "zhèng"},
        {"char": "反", "pinyin": "fǎn"},
        {"char": "真", "pinyin": "zhēn"},
        {"char": "假", "pinyin": "jiǎ"},
        {"char": "虚", "pinyin": "xū"},
        {"char": "实", "pinyin": "shí"},
        {"char": "强", "pinyin": "qiáng"},
        {"char": "弱", "pinyin": "ruò"},
        {"char": "明", "pinyin": "míng"},
        {"char": "暗", "pinyin": "àn"},
        {"char": "亮", "pinyin": "liàng"},
        {"char": "清", "pinyin": "qīng"},
        {"char": "浊", "pinyin": "zhuó"},
        {"char": "静", "pinyin": "jìng"},
        {"char": "闹", "pinyin": "nào"},
        {"char": "忙", "pinyin": "máng"},
        {"char": "闲", "pinyin": "xián"},
        {"char": "贫", "pinyin": "pín"},
        {"char": "富", "pinyin": "fù"},
        {"char": "穷", "pinyin": "qióng"},
        {"char": "达", "pinyin": "dá"},
        {"char": "贵", "pinyin": "guì"},
        {"char": "贱", "pinyin": "jiàn"},
        {"char": "雅", "pinyin": "yǎ"},
        {"char": "俗", "pinyin": "sú"},
        {"char": "洁", "pinyin": "jié"},
        {"char": "脏", "pinyin": "zāng"},
        {"char": "净", "pinyin": "jìng"},
        {"char": "乱", "pinyin": "luàn"},
        {"char": "整", "pinyin": "zhěng"},
        {"char": "齐", "pinyin": "qí"},
        {"char": "散", "pinyin": "sàn"},
        {"char": "聚", "pinyin": "jù"},
        {"char": "合", "pinyin": "hé"},
        {"char": "分", "pinyin": "fēn"},
        {"char": "开", "pinyin": "kāi"},
        {"char": "关", "pinyin": "guān"},
        {"char": "进", "pinyin": "jìn"},
        {"char": "出", "pinyin": "chū"},
        {"char": "上", "pinyin": "shàng"},
        {"char": "下", "pinyin": "xià"},
        {"char": "左", "pinyin": "zuǒ"},
        {"char": "右", "pinyin": "yòu"},
        {"char": "前", "pinyin": "qián"},
        {"char": "后", "pinyin": "hòu"},
        {"char": "内", "pinyin": "nèi"},
        {"char": "外", "pinyin": "wài"},
        {"char": "远", "pinyin": "yuǎn"},
        {"char": "近", "pinyin": "jìn"},
        {"char": "里", "pinyin": "lǐ"},
        {"char": "初", "pinyin": "chū"},
        {"char": "终", "pinyin": "zhōng"},
        {"char": "始", "pinyin": "shǐ"},
        {"char": "末", "pinyin": "mò"},
        {"char": "首", "pinyin": "shǒu"},
        {"char": "尾", "pinyin": "wěi"},
        {"char": "优", "pinyin": "yōu"},
        {"char": "劣", "pinyin": "liè"},
        {"char": "精", "pinyin": "jīng"},
        {"char": "粗", "pinyin": "cū"},
        {"char": "巧", "pinyin": "qiǎo"},
        {"char": "拙", "pinyin": "zhuō"},
        {"char": "勤", "pinyin": "qín"},
        {"char": "懒", "pinyin": "lǎn"},
        {"char": "勇", "pinyin": "yǒng"},
        {"char": "怯", "pinyin": "qiè"},
        {"char": "智", "pinyin": "zhì"},
        {"char": "愚", "pinyin": "yú"},
        {"char": "聪", "pinyin": "cōng"},
        {"char": "笨", "pinyin": "bèn"},
        {"char": "敏", "pinyin": "mǐn"},
        {"char": "钝", "pinyin": "dùn"},
        {"char": "灵", "pinyin": "líng"},
        {"char": "呆", "pinyin": "dāi"},
        {"char": "活", "pinyin": "huó"},
        {"char": "死", "pinyin": "sǐ"},
        {"char": "生", "pinyin": "shēng"},
        {"char": "动", "pinyin": "dòng"},
        {"char": "稳", "pinyin": "wěn"},
        {"char": "躁", "pinyin": "zào"},
        {"char": "平", "pinyin": "píng"},
        {"char": "陡", "pinyin": "dǒu"},
        {"char": "直", "pinyin": "zhí"},
        {"char": "弯", "pinyin": "wān"},
        {"char": "圆", "pinyin": "yuán"},
        {"char": "方", "pinyin": "fāng"},
        {"char": "斜", "pinyin": "xié"},
        {"char": "横", "pinyin": "héng"},
        {"char": "竖", "pinyin": "shù"},
        {"char": "曲", "pinyin": "qū"},
        {"char": "顺", "pinyin": "shùn"},
        {"char": "逆", "pinyin": "nì"},
        {"char": "同", "pinyin": "tóng"},
        {"char": "异", "pinyin": "yì"},
        {"char": "常", "pinyin": "cháng"},
        {"char": "奇", "pinyin": "qí"},
        {"char": "普", "pinyin": "pǔ"},
        {"char": "特", "pinyin": "tè"},
        {"char": "一", "pinyin": "yī"},
        {"char": "众", "pinyin": "zhòng"},
        {"char": "单", "pinyin": "dān"},
        {"char": "复", "pinyin": "fù"},
        {"char": "简", "pinyin": "jiǎn"},
        {"char": "繁", "pinyin": "fán"},
        {"char": "易", "pinyin": "yì"},
        {"char": "难", "pinyin": "nán"},
        {"char": "安", "pinyin": "ān"},
        {"char": "危", "pinyin": "wēi"},
        {"char": "利", "pinyin": "lì"},
        {"char": "害", "pinyin": "hài"},
        {"char": "福", "pinyin": "fú"},
        {"char": "祸", "pinyin": "huò"},
        {"char": "吉", "pinyin": "jí"},
        {"char": "凶", "pinyin": "xiōng"},
        {"char": "祥", "pinyin": "xiáng"},
        {"char": "灾", "pinyin": "zāi"}
    ],
    
    // 第6级 (复合词 - 120个)
    [
        {"char": "学校", "pinyin": "xué xiào"},
        {"char": "老师", "pinyin": "lǎo shī"},
        {"char": "学生", "pinyin": "xué shēng"},
        {"char": "朋友", "pinyin": "péng yǒu"},
        {"char": "家庭", "pinyin": "jiā tíng"},
        {"char": "工作", "pinyin": "gōng zuò"},
        {"char": "快乐", "pinyin": "kuài lè"},
        {"char": "美丽", "pinyin": "měi lì"},
        {"char": "学习", "pinyin": "xué xí"},
        {"char": "知识", "pinyin": "zhī shi"},
        {"char": "智慧", "pinyin": "zhì huì"},
        {"char": "成功", "pinyin": "chéng gōng"},
        {"char": "阳光", "pinyin": "yáng guāng"},
        {"char": "雨水", "pinyin": "yǔ shuǐ"},
        {"char": "空气", "pinyin": "kōng qì"},
        {"char": "大地", "pinyin": "dà dì"},
        {"char": "天空", "pinyin": "tiān kōng"},
        {"char": "海洋", "pinyin": "hǎi yáng"},
        {"char": "森林", "pinyin": "sēn lín"},
        {"char": "草原", "pinyin": "cǎo yuán"},
        {"char": "沙漠", "pinyin": "shā mò"},
        {"char": "高山", "pinyin": "gāo shān"},
        {"char": "河流", "pinyin": "hé liú"},
        {"char": "湖泊", "pinyin": "hú pō"},
        {"char": "岛屿", "pinyin": "dǎo yǔ"},
        {"char": "城市", "pinyin": "chéng shì"},
        {"char": "乡村", "pinyin": "xiāng cūn"},
        {"char": "道路", "pinyin": "dào lù"},
        {"char": "桥梁", "pinyin": "qiáo liáng"},
        {"char": "建筑", "pinyin": "jiàn zhù"},
        {"char": "房屋", "pinyin": "fáng wū"},
        {"char": "家具", "pinyin": "jiā jù"},
        {"char": "电器", "pinyin": "diàn qì"},
        {"char": "衣服", "pinyin": "yī fu"},
        {"char": "鞋子", "pinyin": "xié zi"},
        {"char": "帽子", "pinyin": "mào zi"},
        {"char": "眼镜", "pinyin": "yǎn jìng"},
        {"char": "手表", "pinyin": "shǒu biǎo"},
        {"char": "手机", "pinyin": "shǒu jī"},
        {"char": "电脑", "pinyin": "diàn nǎo"},
        {"char": "电视", "pinyin": "diàn shì"},
        {"char": "收音机", "pinyin": "shōu yīn jī"},
        {"char": "冰箱", "pinyin": "bīng xiāng"},
        {"char": "洗衣机", "pinyin": "xǐ yī jī"},
        {"char": "空调", "pinyin": "kōng tiáo"},
        {"char": "汽车", "pinyin": "qì chē"},
        {"char": "自行车", "pinyin": "zì xíng chē"},
        {"char": "公共汽车", "pinyin": "gōng gòng qì chē"},
        {"char": "火车", "pinyin": "huǒ chē"},
        {"char": "飞机", "pinyin": "fēi jī"},
        {"char": "轮船", "pinyin": "lún chuán"},
        {"char": "地铁", "pinyin": "dì tiě"},
        {"char": "公交车", "pinyin": "gōng jiāo chē"},
        {"char": "出租车", "pinyin": "chū zū chē"},
        {"char": "摩托车", "pinyin": "mó tuō chē"},
        {"char": "电动车", "pinyin": "diàn dòng chē"},
        {"char": "图书馆", "pinyin": "tú shū guǎn"},
        {"char": "博物馆", "pinyin": "bó wù guǎn"},
        {"char": "医院", "pinyin": "yī yuàn"},
        {"char": "药店", "pinyin": "yào diàn"},
        {"char": "银行", "pinyin": "yín háng"},
        {"char": "邮局", "pinyin": "yóu jú"},
        {"char": "超市", "pinyin": "chāo shì"},
        {"char": "商店", "pinyin": "shāng diàn"},
        {"char": "餐厅", "pinyin": "cān tīng"},
        {"char": "酒店", "pinyin": "jiǔ diàn"},
        {"char": "电影院", "pinyin": "diàn yǐng yuàn"},
        {"char": "剧院", "pinyin": "jù yuàn"},
        {"char": "公园", "pinyin": "gōng yuán"},
        {"char": "动物园", "pinyin": "dòng wù yuán"},
        {"char": "植物园", "pinyin": "zhí wù yuán"},
        {"char": "游泳池", "pinyin": "yóu yǒng chí"},
        {"char": "体育场", "pinyin": "tǐ yù chǎng"},
        {"char": "健身房", "pinyin": "jiàn shēn fáng"},
        {"char": "教室", "pinyin": "jiào shì"},
        {"char": "操场", "pinyin": "cāo chǎng"},
        {"char": "宿舍", "pinyin": "sù shè"},
        {"char": "食堂", "pinyin": "shí táng"},
        {"char": "实验室", "pinyin": "shí yàn shì"},
        {"char": "办公室", "pinyin": "bàn gōng shì"},
        {"char": "会议室", "pinyin": "huì yì shì"},
        {"char": "厨房", "pinyin": "chú fáng"},
        {"char": "卧室", "pinyin": "wò shì"},
        {"char": "客厅", "pinyin": "kè tīng"},
        {"char": "卫生间", "pinyin": "wèi shēng jiān"},
        {"char": "阳台", "pinyin": "yáng tái"},
        {"char": "花园", "pinyin": "huā yuán"},
        {"char": "菜园", "pinyin": "cài yuán"},
        {"char": "果园", "pinyin": "guǒ yuán"},
        {"char": "农田", "pinyin": "nóng tián"},
        {"char": "工厂", "pinyin": "gōng chǎng"},
        {"char": "公司", "pinyin": "gōng sī"},
        {"char": "企业", "pinyin": "qǐ yè"},
        {"char": "市场", "pinyin": "shì chǎng"},
        {"char": "广场", "pinyin": "guǎng chǎng"},
        {"char": "街道", "pinyin": "jiē dào"},
        {"char": "小区", "pinyin": "xiǎo qū"},
        {"char": "社区", "pinyin": "shè qū"},
        {"char": "政府", "pinyin": "zhèng fǔ"},
        {"char": "警察", "pinyin": "jǐng chá"},
        {"char": "医生", "pinyin": "yī shēng"},
        {"char": "护士", "pinyin": "hù shi"},
        {"char": "律师", "pinyin": "lǜ shī"},
        {"char": "工程师", "pinyin": "gōng chéng shī"},
        {"char": "科学家", "pinyin": "kē xué jiā"},
        {"char": "艺术家", "pinyin": "yì shù jiā"},
        {"char": "作家", "pinyin": "zuò jiā"},
        {"char": "记者", "pinyin": "jì zhě"},
        {"char": "教师", "pinyin": "jiào shī"},
        {"char": "司机", "pinyin": "sī jī"},
        {"char": "厨师", "pinyin": "chú shī"},
        {"char": "农民", "pinyin": "nóng mín"},
        {"char": "工人", "pinyin": "gōng rén"},
        {"char": "商人", "pinyin": "shāng rén"},
        {"char": "儿童", "pinyin": "ér tóng"},
        {"char": "青年", "pinyin": "qīng nián"},
        {"char": "成人", "pinyin": "chéng rén"},
        {"char": "老人", "pinyin": "lǎo rén"},
        {"char": "男人", "pinyin": "nán rén"},
        {"char": "女人", "pinyin": "nǚ rén"},
        {"char": "孩子", "pinyin": "hái zi"},
        {"char": "父母", "pinyin": "fù mǔ"},
        {"char": "兄弟", "pinyin": "xiōng dì"},
        {"char": "姐妹", "pinyin": "jiě mèi"},
        {"char": "夫妻", "pinyin": "fū qī"},
        {"char": "同学", "pinyin": "tóng xué"},
        {"char": "同事", "pinyin": "tóng shì"},
        {"char": "邻居", "pinyin": "lín jū"},
        {"char": "客人", "pinyin": "kè rén"},
        {"char": "主人", "pinyin": "zhǔ rén"},
        {"char": "病人", "pinyin": "bìng rén"},
        {"char": "顾客", "pinyin": "gù kè"},
        {"char": "老板", "pinyin": "lǎo bǎn"},
        {"char": "员工", "pinyin": "yuán gōng"},
        {"char": "领导", "pinyin": "lǐng dǎo"},
        {"char": "下属", "pinyin": "xià shǔ"},
        {"char": "关系", "pinyin": "guān xì"},
        {"char": "友谊", "pinyin": "yǒu yì"},
        {"char": "爱情", "pinyin": "ài qíng"},
        {"char": "亲情", "pinyin": "qīn qíng"},
        {"char": "感情", "pinyin": "gǎn qíng"},
        {"char": "心情", "pinyin": "xīn qíng"},
        {"char": "思想", "pinyin": "sī xiǎng"},
        {"char": "感觉", "pinyin": "gǎn jué"},
        {"char": "情绪", "pinyin": "qíng xù"},
        {"char": "态度", "pinyin": "tài dù"},
        {"char": "行为", "pinyin": "xíng wéi"},
        {"char": "习惯", "pinyin": "xí guàn"},
        {"char": "兴趣", "pinyin": "xìng qù"},
        {"char": "爱好", "pinyin": "ài hào"},
        {"char": "梦想", "pinyin": "mèng xiǎng"},
        {"char": "希望", "pinyin": "xī wàng"},
        {"char": "未来", "pinyin": "wèi lái"},
        {"char": "过去", "pinyin": "guò qù"},
        {"char": "现在", "pinyin": "xiàn zài"},
        {"char": "时间", "pinyin": "shí jiān"},
        {"char": "空间", "pinyin": "kōng jiān"},
        {"char": "世界", "pinyin": "shì jiè"},
        {"char": "生活", "pinyin": "shēng huó"},
        {"char": "娱乐", "pinyin": "yú lè"},
        {"char": "运动", "pinyin": "yùn dòng"},
        {"char": "旅行", "pinyin": "lǚ xíng"},
        {"char": "美食", "pinyin": "měi shí"},
        {"char": "文化", "pinyin": "wén huà"},
        {"char": "传统", "pinyin": "chuán tǒng"},
        {"char": "现代", "pinyin": "xiàn dài"},
        {"char": "科技", "pinyin": "kē jì"},
        {"char": "自然", "pinyin": "zì rán"},
        {"char": "环境", "pinyin": "huán jìng"},
        {"char": "健康", "pinyin": "jiàn kāng"},
        {"char": "安全", "pinyin": "ān quán"},
        {"char": "和平", "pinyin": "hé píng"},
        {"char": "发展", "pinyin": "fā zhǎn"},
        {"char": "进步", "pinyin": "jìn bù"},
        {"char": "失败", "pinyin": "shī bài"},
        {"char": "困难", "pinyin": "kùn nán"},
        {"char": "容易", "pinyin": "róng yì"},
        {"char": "简单", "pinyin": "jiǎn dān"},
        {"char": "复杂", "pinyin": "fù zá"},
        {"char": "重要", "pinyin": "zhòng yào"},
        {"char": "一般", "pinyin": "yī bān"},
        {"char": "特殊", "pinyin": "tè shū"},
        {"char": "普通", "pinyin": "pǔ tōng"},
        {"char": "特别", "pinyin": "tè bié"},
        {"char": "非常", "pinyin": "fēi cháng"},
        {"char": "十分", "pinyin": "shí fēn"},
        {"char": "完全", "pinyin": "wán quán"},
        {"char": "几乎", "pinyin": "jī hū"},
        {"char": "可能", "pinyin": "kě néng"},
        {"char": "一定", "pinyin": "yī dìng"},
        {"char": "也许", "pinyin": "yě xǔ"},
        {"char": "如果", "pinyin": "rú guǒ"},
        {"char": "但是", "pinyin": "dàn shì"},
        {"char": "因为", "pinyin": "yīn wèi"},
        {"char": "所以", "pinyin": "suǒ yǐ"},
        {"char": "然后", "pinyin": "rán hòu"},
        {"char": "首先", "pinyin": "shǒu xiān"},
        {"char": "最后", "pinyin": "zuì hòu"},
        {"char": "以前", "pinyin": "yǐ qián"},
        {"char": "以后", "pinyin": "yǐ hòu"},
        {"char": "今天", "pinyin": "jīn tiān"},
        {"char": "明天", "pinyin": "míng tiān"},
        {"char": "昨天", "pinyin": "zuó tiān"},
        {"char": "早上", "pinyin": "zǎo shàng"},
        {"char": "中午", "pinyin": "zhōng wǔ"},
        {"char": "晚上", "pinyin": "wǎn shàng"},
        {"char": "春天", "pinyin": "chūn tiān"},
        {"char": "夏天", "pinyin": "xià tiān"},
        {"char": "秋天", "pinyin": "qiū tiān"},
        {"char": "冬天", "pinyin": "dōng tiān"},
        {"char": "节日", "pinyin": "jié rì"},
        {"char": "生日", "pinyin": "shēng rì"},
        {"char": "婚礼", "pinyin": "hūn lǐ"},
        {"char": "聚会", "pinyin": "jù huì"},
        {"char": "会议", "pinyin": "huì yì"},
        {"char": "活动", "pinyin": "huó dòng"},
        {"char": "比赛", "pinyin": "bǐ sài"},
        {"char": "考试", "pinyin": "kǎo shì"},
        {"char": "面试", "pinyin": "miàn shì"},
        {"char": "表演", "pinyin": "biǎo yǎn"},
        {"char": "展览", "pinyin": "zhǎn lǎn"},
        {"char": "旅游", "pinyin": "lǚ yóu"},
        {"char": "购物", "pinyin": "gòu wù"},
        {"char": "锻炼", "pinyin": "duàn liàn"},
        {"char": "休息", "pinyin": "xiū xī"},
        {"char": "睡眠", "pinyin": "shuì mián"},
        {"char": "饮食", "pinyin": "yǐn shí"},
        {"char": "营养", "pinyin": "yíng yǎng"},
        {"char": "味道", "pinyin": "wèi dao"},
        {"char": "颜色", "pinyin": "yán sè"},
        {"char": "形状", "pinyin": "xíng zhuàng"}
    ]
];

let currentLevel = 1;
let selectedTiles = [];
let matchedPairs = 0;
let startTime;
let timerInterval;
let currentWords = [];
let gameStarted = false;
let soundEnabled = true;
let hintUsed = false;

// 汉字卡片颜色（浅色系）
const charColors = [
    '#FADBD8', '#F5B7B1', '#F1948A', '#EC7063',
    '#D7BDE2', '#D2B4DE', '#BB8FCE', '#A569BD',
    '#D6EAF8', '#AED6F1', '#85C1E9', '#5DADE2'
];

// 拼音卡片颜色（浅色系，与汉字颜色形成对比）
const pinyinColors = [
    '#D5F5E3', '#ABEBC6', '#82E0AA', '#58D68D',
    '#F9E79F', '#F7DC6F', '#F4D03F', '#F1C40F',
    '#FEF9E7', '#FCF3CF', '#F9E79F', '#F7F9F9'
];

let musicTimeout;
let audioContextInstance = null;

function startBackgroundMusic() {
    if (!soundEnabled) return;
    
    if (!audioContextInstance) {
        try {
            audioContextInstance = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn("Audio not supported in this browser");
            return;
        }
    }
    
    // 贝多芬《欢乐颂》主旋律音符频率和时长
    const notes = [329.63, 329.63, 349.23, 392.00, 392.00, 349.23, 329.63, 293.66, 261.63, 261.63, 293.66, 329.63, 329.63, 293.66, 293.66];
    const durations = [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4];
    let noteIndex = 0;

    function playNext() {
        if (!soundEnabled) return;
        
        if (audioContextInstance.state === 'suspended') {
            audioContextInstance.resume();
        }
        
        const oscillator = audioContextInstance.createOscillator();
        const gainNode = audioContextInstance.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContextInstance.destination);
        oscillator.frequency.setValueAtTime(notes[noteIndex % notes.length], audioContextInstance.currentTime);
        gainNode.gain.setValueAtTime(0.03, audioContextInstance.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextInstance.currentTime + durations[noteIndex % durations.length]);
        oscillator.start(audioContextInstance.currentTime);
        oscillator.stop(audioContextInstance.currentTime + durations[noteIndex % durations.length]);
        noteIndex = (noteIndex + 1) % notes.length;
        musicTimeout = setTimeout(playNext, durations[noteIndex % durations.length] * 1000 + 100);
    }
    playNext();
}

function stopBackgroundMusic() {
    if (musicTimeout) {
        clearTimeout(musicTimeout);
        musicTimeout = null;
    }
    if (audioContextInstance) {
        audioContextInstance.close();
        audioContextInstance = null;
    }
}

function playSound(type) {
    if (!soundEnabled) return;
    
    if (!audioContextInstance) {
        try {
            audioContextInstance = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn("Audio not supported in this browser");
            return;
        }
    }
    
    if (audioContextInstance.state === 'suspended') {
        audioContextInstance.resume();
    }
    
    if (type === 'explode') {
        const bufferSize = audioContextInstance.sampleRate * 0.3;
        const buffer = audioContextInstance.createBuffer(1, bufferSize, audioContextInstance.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
        }
        const source = audioContextInstance.createBufferSource();
        source.buffer = buffer;
        const gainNode = audioContextInstance.createGain();
        source.connect(gainNode);
        gainNode.connect(audioContextInstance.destination);
        gainNode.gain.setValueAtTime(0.15, audioContextInstance.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextInstance.currentTime + 0.3);
        source.start();
    } else if (type === 'match') {
        const oscillator = audioContextInstance.createOscillator();
        const gainNode = audioContextInstance.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContextInstance.destination);
        oscillator.frequency.setValueAtTime(800, audioContextInstance.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContextInstance.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.1, audioContextInstance.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextInstance.currentTime + 0.2);
        oscillator.start();
    } else {
        const oscillator = audioContextInstance.createOscillator();
        const gainNode = audioContextInstance.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContextInstance.destination);
        oscillator.frequency.setValueAtTime(200, audioContextInstance.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContextInstance.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextInstance.currentTime + 0.2);
        oscillator.start();
    }
}

function getRandomWords(level, count) {
    const levelWords = [...wordLibrary[level - 1]];
    const selectedWords = [];
    
    for (let i = 0; i < count; i++) {
        if (levelWords.length === 0) break;
        
        const randomIndex = Math.floor(Math.random() * levelWords.length);
        selectedWords.push(levelWords[randomIndex]);
        levelWords.splice(randomIndex, 1);
    }
    
    return selectedWords;
}

function initGame() {
    if (musicTimeout) {
        clearTimeout(musicTimeout);
    }
    
    startBackgroundMusic();
    currentWords = getRandomWords(currentLevel, 12);
    matchedPairs = 0;
    selectedTiles = [];
    hintUsed = false;
    createGrid();
    startTimer();
    updateUI();
}

function createGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    const tiles = [];

    currentWords.forEach(word => {
        tiles.push({ type: 'char', content: word.char, match: word.pinyin });
        tiles.push({ type: 'pinyin', content: word.pinyin, match: word.char });
    });

    shuffleArray(tiles);

    for (let i = 0; i < 24; i++) {
        const tileElement = document.createElement('div');
        tileElement.className = 'tile';
        
        if (i < tiles.length) {
            const tile = tiles[i];
            tileElement.innerHTML = `<div class="icon">${tile.type === 'char' ? '📖' : '🎵'}</div><div class="text">${tile.content}</div>`;
            
            if (tile.type === 'char') {
                tileElement.style.backgroundColor = charColors[Math.floor(Math.random() * charColors.length)];
            } else {
                tileElement.style.backgroundColor = pinyinColors[Math.floor(Math.random() * pinyinColors.length)];
            }
            
            tileElement.dataset.type = tile.type;
            tileElement.dataset.match = tile.match;
            tileElement.dataset.content = tile.content;
            tileElement.dataset.index = i;
            tileElement.addEventListener('click', () => selectTile(tileElement));
        } else {
            tileElement.style.visibility = 'hidden';
        }
        
        grid.appendChild(tileElement);
    }
}

// Fisher-Yates 洗牌算法
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function selectTile(tile) {
    if (tile.classList.contains('matched') || selectedTiles.includes(tile) || selectedTiles.length >= 2) return;

    tile.classList.add('selected');
    selectedTiles.push(tile);

    if (selectedTiles.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [tile1, tile2] = selectedTiles;

    if (tile1.dataset.content === tile2.dataset.match && tile2.dataset.content === tile1.dataset.match) {
        tile1.classList.add('matched');
        tile2.classList.add('matched');
        matchedPairs++;
        playSound('explode');
        setTimeout(() => {
            tile1.style.opacity = '0';
            tile2.style.opacity = '0';
            tile1.style.pointerEvents = 'none';
            tile2.style.pointerEvents = 'none';
        }, 500);
        if (matchedPairs === 12) {
            levelComplete();
        }
    } else {
        playSound('error');
        setTimeout(() => {
            tile1.classList.remove('selected');
            tile2.classList.remove('selected');
        }, 500);
    }
    selectedTiles = [];
    updateUI();
}

function levelComplete() {
    clearInterval(timerInterval);
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('levelTime').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (currentLevel === 6) {
        document.getElementById('gameOverModal').style.display = 'flex';
    } else {
        document.getElementById('levelModal').style.display = 'flex';
    }
}

function nextLevel() {
    currentLevel++;
    document.getElementById('levelModal').style.display = 'none';
    initGame();
}

function restartGame() {
    currentLevel = 1;
    document.getElementById('gameOverModal').style.display = 'none';
    initGame();
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 1000);
}

function updateTime() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('time').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateUI() {
    document.getElementById('level').textContent = currentLevel;
    document.getElementById('remaining').textContent = 24 - matchedPairs * 2;
    document.getElementById('total').textContent = 24;
    
    const progressPercent = ((matchedPairs * 2) / 24) * 100;
    document.getElementById('progressFill').style.width = `${progressPercent}%`;
}

// 提示功能
function showHint() {
    if (hintUsed) {
        showMessage("本关卡已使用过提示！");
        return;
    }
    
    const tiles = Array.from(document.querySelectorAll('.tile:not(.matched):not(.selected)'));
    const pairs = [];
    
    for (let i = 0; i < tiles.length; i++) {
        for (let j = i + 1; j < tiles.length; j++) {
            if (tiles[i].dataset.content === tiles[j].dataset.match && 
                tiles[j].dataset.content === tiles[i].dataset.match) {
                pairs.push([tiles[i], tiles[j]]);
            }
        }
    }
    
    if (pairs.length > 0) {
        const randomPair = pairs[Math.floor(Math.random() * pairs.length)];
        
        randomPair[0].classList.add('selected');
        randomPair[1].classList.add('selected');
        
        showMessage(`找到匹配项：${randomPair[0].dataset.content} ↔ ${randomPair[1].dataset.content}`);
        
        setTimeout(() => {
            randomPair[0].classList.remove('selected');
            randomPair[1].classList.remove('selected');
        }, 3000);
        
        hintUsed = true;
    } else {
        showMessage("没有找到可匹配的卡片！");
    }
}

function showMessage(text) {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;
    messageEl.style.color = '#4CAF50';
    
    setTimeout(() => {
        messageEl.textContent = '';
    }, 3000);
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('soundToggle');
    btn.textContent = soundEnabled ? '声音: 开' : '声音: 关';
    btn.classList.toggle('active', !soundEnabled);
    
    if (soundEnabled) {
        startBackgroundMusic();
    } else {
        stopBackgroundMusic();
    }
}

// 事件监听器
document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('startScreen').style.display = 'none';
    gameStarted = true;
    initGame();
});

document.getElementById('nextLevelBtn').addEventListener('click', nextLevel);
document.getElementById('restartBtn').addEventListener('click', restartGame);
document.getElementById('hintButton').addEventListener('click', showHint);
document.getElementById('soundToggle').addEventListener('click', toggleSound);

// 键盘快捷键支持
document.addEventListener('keydown', (e) => {
    if (e.key === 'h' || e.key === 'H') {
        showHint();
    } else if (e.key === 'r' || e.key === 'R') {
        if (confirm('确定要重新开始游戏吗？')) {
            restartGame();
        }
    }
});
