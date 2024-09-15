import React, { useEffect, useRef, useState} from 'react';
import "../src/moonCake.css";


const pastorVerses = {
    "主任牧師": {
        verses: ["詩篇145:18-19 凡求告耶和華的，就是誠心求告祂的，耶和華便與他們相近。敬畏祂的，祂必成就他們的心願，也必聽他們的呼求，拯救他們。", "詩篇72:5 太陽還存，月亮還在，人要敬畏祢，直到萬代！", "以賽亞書 60:19 日頭不再作你白晝的光； 月亮也不再發光照耀你。 耶和華卻要作你永遠的光； 你神要為你的榮耀。", "詩篇 86:5 主啊，你本為良善，樂意饒恕人， 有豐盛的慈愛賜給凡求告你的人。", "路加福音 1:78-79 因我們神憐憫的心腸，叫清晨的日光從高天臨到我們，要照亮坐在黑暗中死蔭裏的人，把我們的腳引到平安的路上。"],
        image: "/pastorImgs/pastor1.JPG"
    },
    "立誠牧師": {
        verses: ["申命記 31:6 你們當剛強壯膽，不要害怕，也不要畏懼他們，因為耶和華－你的神和你同去。他必不撇下你，也不丟棄你。", "以賽亞書40:31 但那等候耶和華的必從新得力。他們必如鷹展翅上騰；他們奔跑卻不困倦，行走卻不疲乏。", "詩篇 37:11  但謙卑人必承受地土，以豐盛的平安為樂。", "羅馬書 15:13  但願使人有盼望的神，因信將諸般的喜樂、平安充滿你們的心，使你們藉着聖靈的能力大有盼望！", "以賽亞書 33:6 你一生一世必得安穩－有豐盛的救恩，並智慧和知識；你以敬畏耶和華為至寶。"],
        image: "./pastorImgs/pastor2.JPG"
    },
    "馮珮牧師": {
        verses: ["羅馬書 12:12 在指望中要喜樂；在患難中要忍耐；禱告要恆切。", "箴言 2:6-7  因為，耶和華賜人智慧；知識和聰明都由祂口而出。祂給正直人存留真智慧，給行為純正的人作盾牌。", "提摩太後書 1:7 因為神賜給我們，不是膽怯的心，乃是剛強、仁愛、謹守的心。", "以賽亞書 60:22  至小的族要加增千倍；微弱的國必成為強盛。我－耶和華要按定期速成這事。", "詩篇 18:30 至於神，祂的道是完全的；耶和華的話是煉淨的。凡投靠祂的，祂便作他們的盾牌。"],
        image: "/pastorImgs/pastor3.JPG"
    },
    "琦懿牧師": {
        verses: ["耶利米書 33:3  你求告我，我就應允你，並將你所不知道、又大又難的事指示你。", "以賽亞書 60:20 你的日頭不再下落；你的月亮也不退縮；因為耶和華必作你永遠的光。你悲哀的日子也完畢了。", "馬太福音 5:14 你們是世上的光。城造在山上是不能隱藏的。", "詩篇 98:1 你們要向耶和華唱新歌！ 因為他行過奇妙的事；他的右手和聖臂施行救恩。", "哥林多前書16:13 你們務要儆醒，在真道上站立得穩，要作大丈夫，要剛強。"],
        image: "/pastorImgs/pastor4.JPG"
    },
    "婉琪傳道": {
        verses: ["詩篇 37:5 當將你的事交託耶和華，並倚靠祂，祂就必成全。", "腓立比書4:9 你們在我身上所學習的，所領受的，所聽見的，所看見的，這些事你們都要去行，賜平安的神就必與你們同在。", "馬太福音 6:33 你們要先求祂的國和祂的義，這些東西都要加給你們了。", "提摩太後書 2:15 你當竭力在神面前得蒙喜悅，作無愧的工人，按著正意分解真理的道。", "雅各書5:7 弟兄們哪，你們要忍耐，直到主來。看哪，農夫忍耐等候地裡寶貴的出產，直到得了秋雨春雨。"],
        image: "/pastorImgs/pastor5.JPG"
    },
    "文峰傳道": {
        verses: ["雅各書 1:12 忍受試探的人是有福的，因為他經過試驗以後，必得生命的冠冕；這是主應許給那些愛他之人的。", "以賽亞書 55:11 我口所出的話也必如此，決不徒然返回，卻要成就我所喜悅的，在我發他去成就的事上必然亨通。", "詩篇 62:5 我的心哪，你當默默無聲，專等候神，因為我的盼望是從祂而來。", "詩篇73:26 我的肉體和我的心腸衰殘；但神是我心裡的力量，又是我的福分，直到永遠。", "詩篇 139:9-10 我若展開清晨的翅膀，飛到海極居住，就是在那裏，祢的手必引導我；祢的右手也必扶持我。"],
        image: "/pastorImgs/pastor6.JPG"
    },
    "德民傳道": {
        verses: ["詩篇9:1 我要一心稱謝耶和華；我要傳揚祢一切奇妙的作為。", "以賽亞書 44:3-4 我要用水澆灌乾渴之地， 使河流滋潤乾旱之土。 我要用我的靈澆灌你的後裔，使我賜的福臨到你的子孫。祂們要滋長如青草，又如溪旁楊柳。", "以賽亞書 45:3 我要把隱藏的寶物和秘密收藏的財富賜給你， 好叫你知道點名呼召你的是我—以色列的上帝耶和華。", "詩篇 33:20-21 我們的心向來等候耶和華；祂是我們的幫助，我們的盾牌。我們的心必靠祂歡喜，因為我們向來倚靠祂的聖名。", "約翰福音 14:27 我留下平安給你們；我將我的平安賜給你們。我所賜的，不像世人所賜的。你們心裏不要憂愁，也不要膽怯。"],
        image: "/pastorImgs/pastor7.JPG"
    },
    "素卿傳道": {
        verses: ["詩篇 34:4-5 我曾尋求耶和華，他就應允我， 救我脫離了一切的恐懼。 凡仰望他的，便有光榮； 他們的臉必不蒙羞。", "詩篇 8:3-4 我觀看祢指頭所造的天，並祢所陳設的月亮星宿，便說：人算甚麼，祢竟顧念他！ 世人算甚麼，祢竟眷顧他！", "詩篇 143:8 求你使我清晨得聽你慈愛之言，因我倚靠你；求你使我知道當行的路，因我的心仰望你。", "以弗所書 3:16 求祂按着祂豐盛的榮耀，藉着祂的靈，叫你們心裏的力量剛強起來", "詩篇 25:5 求祢以祢的真理引導我，教訓我，因為祢是救我的神。我終日等候祢。"],
        image: "/pastorImgs/pastor8.JPG"
    },
    "白薇傳道": {
        verses: ["詩篇 143:10 求祢指教我遵行祢的旨意，因祢是我的神。祢的靈本為善；求祢引我到平坦之地。", "馬太福音 4:16 那坐在黑暗裏的百姓看見了大光；坐在死蔭之地的人有光發現照着他們。", "羅馬書 4:20-21 並且仰望神的應許，總沒有因不信心裏起疑惑，反倒因信心裏得堅固，將榮耀歸給神，且滿心相信神所應許的必能做成。", "哥林多前書15:58 所以，我親愛的弟兄們，你們務要堅固，不可搖動，常常竭力多做主工；因為知道，你們的勞苦在主裡面不是徒然的。", "雅各書 5:16 所以你們要彼此認罪，互相代求，使你們可以得醫治。義人祈禱所發的力量是大有功效的。"],
        image: "/pastorImgs/pastor9.jpg"
    },
    "耿晏傳道": {
        verses: ["詩篇72:6-7 祂必降臨，像雨降在已割的草地上，如甘霖滋潤田地。在祂的日子，義人要發旺，大有平安，好像月亮長存。", "撒母耳記下 22:34-35 祂使我的腳快如母鹿的蹄，又使我在高處安穩。祂教導我的手能以爭戰，甚至我的膀臂能開銅弓。", "詩篇136:8-9 祂造日頭管白晝，因祂的慈愛永遠長存。祂造月亮星宿管黑夜，因祂的慈愛永遠長存。", "約翰福音 7:38 信我的人就如經上所說：「從他腹中要流出活水的江河來。」", "詩篇133:1 看哪，弟兄和睦同居是何等地善，何等地美！"],
        image: "/pastorImgs/pastor10.JPG"
    },
    "曉傑傳道": {
        verses: ["詩篇 34:17-18 義人呼求，耶和華聽見了， 便救他們脫離一切患難。 耶和華靠近傷心的人， 拯救靈性痛悔的人。", "西番雅書3:17 耶和華─你的神是施行拯救、大有能力的主。祂在你中間必因你歡欣喜樂，默然愛你，且因你喜樂而歡呼。", "詩篇 19:14 耶和華－我的磐石，我的救贖主啊，願我口中的言語、心裏的意念在祢面前蒙悅納。", "詩篇 34:15 耶和華的眼目看顧義人；他的耳朵聽他們的呼求。", "詩篇 34:9 耶和華的聖民哪，你們當敬畏他，因敬畏他的一無所缺。"],
        image: "/pastorImgs/pastor11.JPG"
    },
    "俊慶傳道": {
        verses: ["詩篇 37:23-24 義人的腳步被耶和華立定； 他的道路，耶和華也喜愛。 他雖失腳也不致全身仆倒， 因為耶和華用手攙扶他。", "詩篇 121:7-8 耶和華要保護你，免受一切的災害；祂要保護你的性命。你出你入，耶和華要保護你，從今時直到永遠。", "詩篇 34:22 耶和華救贖他僕人的靈魂；凡投靠他的，必不致定罪。", "申命記32:10 耶和華遇見他在曠野─荒涼野獸吼叫之地，就環繞他，看顧他，保護他，如同保護眼中的瞳人。", "耶利米書 29:11 耶和華說：我知道我向你們所懷的意念是賜平安的意念，不是降災禍的意念，要叫你們末後有指望。"],
        image: "/pastorImgs/pastor12.JPG"
    },
    "海雲傳道": {
        verses: ["詩篇 27:1 耶和華是我的亮光，是我的拯救， 我還怕誰呢？ 耶和華是我性命的保障， 我還懼誰呢？", "帖撒羅尼迦前書5:16-18 要常常喜樂，不住地禱告，凡事謝恩；因為這是神在基督耶穌裡向你們所定的旨意。", "箴言 30:5 神的言語句句都是煉淨的；投靠他的，他便作他們的盾牌。", "詩篇 139:23-24 神啊，求你鑒察我，知道我的心思，試煉我，知道我的意念，看在我裏面有甚麼惡行沒有，引導我走永生的道路。", "約翰一書 4:16 神愛我們的心，我們也知道也信。神就是愛；住在愛裏面的，就是住在神裏面，神也住在他裏面。"],
        image: "/pastorImgs/pastor13.JPG"
    },
    "旺旺傳道": {
        verses: ["詩篇 18:28 祢必點亮我的燈； 耶和華－我的上帝必照明我的黑暗。", "撒母耳記下 22:36 祢把祢的救恩給我作盾牌；祢的溫和使我為大。", "詩篇 4:7-8 祢使我心裏快樂，勝過那豐收五穀新酒的人。我必安然躺下睡覺，因為獨有祢－耶和華使我安然居住。", "撒母耳記下 22:37祢使我腳下的地步寬闊；我的腳未曾滑跌。", "詩篇65:4 祢所揀選、使他親近祢、住在祢院中的，這人便為有福！我們必因祢居所、祢聖殿的美福知足了。"],
        image: "/pastorImgs/pastor14.JPG"
    },
    "晴湄傳道": {
        verses: ["以賽亞書26:3-4 堅心倚賴祢的，祢必保守祂十分平安，因為他倚靠祢。你們當倚靠耶和華，直到永遠，因為耶和華是永久的磐石。", "以賽亞書49:15-16 婦人焉能忘記他吃奶的嬰孩，不憐恤他所生的兒子？即或有忘記的，我卻不忘記你。看哪，我將你銘刻在我掌上；你的牆垣常在我眼前。", "約翰一書 4:18 愛裏沒有懼怕；愛既完全，就把懼怕除去。因為懼怕裏含着刑罰，懼怕的人在愛裏未得完全。", "詩篇 31:19 敬畏祢、投靠祢的人，祢為祂們所積存的，在世人面前所施行的恩惠是何等大呢！", "歌羅西書 3:16 當用各樣的智慧，把基督的道理豐豐富富地存在心裏，用詩章、頌詞、靈歌，彼此教導，互相勸戒，心被恩感，歌頌神。"],
        image: "/pastorImgs/pastor15.JPG"
    }
}

const MoonCake = () => {
    const [selectedVerse, setSelectedVerse] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [clickCount,setClickCount] = useState(0);
    const [imageSrc,setImageSrc] = useState('/blessedBtn.PNG');
    const [showPastorImg,setShowPastorImg] = useState(false);
    const verseRef = useRef(null);
    const [buttonHeight, setButtonHeight] = useState('8vh'); // 初始间距
    const [showMoonCake, setShowMoonCake] = useState(true);
    const [showVerse, setVerse] = useState(false);
    const [animate, setAnimate] = useState(false);

    const getRandomVerse = () => {
        const pastors = Object.keys(pastorVerses);
        const randomPastor = pastors[Math.floor(Math.random() * pastors.length)];

        const verses = pastorVerses[randomPastor].verses;
        const randomVerse = verses[Math.floor(Math.random() * verses.length)];
        
        setClickCount(preCount => {
            const newCount = preCount + 1;
            if(newCount === 1){
                setImageSrc('/againBtn.PNG');
            }
            return newCount;
        });
        setSelectedVerse(randomVerse);
        setSelectedImage(pastorVerses[randomPastor].image);

        setAnimate(true);

    
        setTimeout(() => {
            setShowPastorImg(true);
            setVerse(true);
        }, 300);

        setTimeout(() => {
            setShowMoonCake(false);
            
        }, 1000); //需要與動畫時長一致
        
    };

    useEffect(() => {
        if (verseRef.current) {
            const verseHeight = verseRef.current.clientHeight;
            const newButtonHeight = Math.max(verseHeight / 10, 8);
            setButtonHeight(`${newButtonHeight}vh`);
        }
    }, [selectedVerse]);

    return (
        <div className='container'>
            <div className='outside'>
                <div className='mooncake-container'>
                    <img
                        className='pastorImg'
                        src={selectedImage}
                        alt='牧者'
                        style={{opacity: showPastorImg ? 1 : 0}}
                    />
                    {showMoonCake &&(
                        <div className={`mooncake ${animate ? 'animate' : ''}`}>
                            <div className='crack-overlay' />
                        </div>
                    )}
                    
                </div>
                {showVerse && (
                    <div className='pastorImgandVerses' ref={verseRef}>
                        <h2 className='verseH2'>{selectedVerse}</h2>
                    </div>
                )}
                <img 
                    className='btnImg' 
                    onClick={getRandomVerse} 
                    src={imageSrc} 
                    alt={clickCount >= 1 ? '再抽一次' : '按下按钮'}
                    // style={{marginTop: buttonHeight}}
                />
            </div>
            {/* <div className='outside'>
                {showMoonCake && (
                    <div className={`mooncake ${animate ? 'animate' : ''}`}>
                        <img
                        className={`pastorImg ${showPastorImg ? 'show' : ''}`}  
                        // style={{opacity: animate ? 0 : 1,transform:'opacity 1s'}}
                    />
                    <div className='crack-overlay' />
                    </div>
                )}
                {showVerse && (
                    <div className='pastorImgandVerses' ref={verseRef}>
                        {showPastorImg &&(<img className='pastorImg' src={selectedImage} alt='牧者' style={{animationDelay:'0.5s'}}/>)}                 
                        <h2 className='verseH2'>{selectedVerse}</h2>
                    </div>
                )}
                <img className='btnImg' onClick={getRandomVerse} src={imageSrc} alt={clickCount >= 1 ? '再抽一次' : '按下按鈕' }></img>
            </div> */}
        </div>
    );
};

export default MoonCake;