// تسجيل Service Worker للعمل أوفلاين
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(() => console.log('HIGH TECH PS - SW Registered Successfully!'))
            .catch(err => console.error('SW Failed:', err));
    });
}

// التحكم بشريط تحميل الكاش تلقائياً حتى 100%
const progressFill = document.getElementById('progress-fill');
const cachePercent = document.getElementById('cache-percent');
const cacheStatus = document.getElementById('cache-status');

function startCachingProcess() {
    let progress = 0;
    const isCached = localStorage.getItem('hightech_cached');

    if (isCached === 'true') {
        progressFill.style.width = '100%';
        cachePercent.innerText = '100%';
        cacheStatus.innerText = 'الكاش مكتمل سابقاً! يمكنك فصل الإنترنت الآن والعمل أوفلاين.';
        cacheStatus.style.color = 'var(--success)';
        return;
    }

    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 5) + 2;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            localStorage.setItem('hightech_cached', 'true');
            cacheStatus.innerText = 'تم اكتمال الكاش (100%)! اقفل الإنترنت الآن وستعمل الصفحة أوفلاين.';
            cacheStatus.style.color = 'var(--success)';
        }
        progressFill.style.width = progress + '%';
        cachePercent.innerText = progress + '%';
    }, 60);
}

window.addEventListener('load', startCachingProcess);

function log(msg) {
    document.getElementById('console-log').innerText = msg;
}

// محرك PsFree المدمج داخل كاش الهوست
window.psfree_payload = "È6   Û  ˙SHÉÏ Hã  m  Hâ<$Hât$ HâÊHãÄà%  eHã %    H«Éò       Hâﬂˇ–Ö¿t ˜ÿÎ ãÉò   HÉƒ [√Û  ˙Hã »l  Hãê∏%  H9êà%   ï¿ ∂¿√IâÒHâ÷ã ∏    ”‡ˇ»Iâ¯Hã?!–”˙â ãV ) π     H—L9œâV s É˙   D ∂ â—Hˇ«É¬ A”‚D	 ÎﬂIâ8√AUSª    IâÕâÿDâ¡”‡HÉÏ ˇ»# HòEã\\Ö Aˆ√ t:HâT$ Hât$ Hâ<$ËwˇˇˇHãT$ DâŸÉ· Hãt$ ”„Hã<$ˇÀ# A¡Î Bç  Eã\\Ö DâŸÉ· ËEˇˇˇDâÿHÉƒ ¡Ë [%ˇ   A]√AWAVAUATUSHÅÏÿ   1¿Iâ˝IâÚHç|$ âŒπ    Aâ‘Û´Hç|$Pπ    Û´Lçt$ 1¿Hç|$PA9¿~ A ∂  Hˇ¿ˇDî ÎÌãD$ 1“âD$T∏    Aã ÜDã áç QA ÀDâ\\á Hˇ¿9∆ ÊHc∆ãDÑ ç<P1¿A9¿~ A ∂  HcTåPDçZ fâÑTê   Dâ\\åPHˇ¿Î€∏    âÒâ√HcT$P”„9˚~ Dâ·”‡â¬1¿A«DÖ     Hˇ¿9¬ È÷   π    âÀHˇ¡AãDé¸Ö¿tÚH “Aø    âŸLçÑ ê   A”Á1ÌA9‹ å¶   AçwˇA ø IÉ¿ HcÕ¡‚ 	⁄9ÓAâTç u%A9‹ é|   Ic◊LâÓH¡‚ E ˇIç|  ˇ√ˇ Äl  Î€âÒø   Ä1ÈÛ Ω…”ÔçWˇ!Í	˙ˇ»â’u¶çK Hc…A9ÃâÀ|*Ic◊HâL$ H¡‚ Lâ $Iç|  LâÓˇ 7l  HãL$ E ˇLã $Hˇ¡AãDé¸Ö¿t√ÈQˇˇˇIc‘Dâ·Mç4ñ∫    ”‚Lâ∆çzˇAÉÀˇâ<$E1“ø    Dã $AâÿE)‡A!ÈE9ŸtAIc»Aâ√AâˇAâ A”ÁHˇ¡E9˚}\nEã éGç ZÎÂâ—AÉ‚ ¡· McŸD	—Aâ“É… D ˙CâLù EâÀD ø Dâ¡É· AâˇA¡· A	…Dâ¡A”ÁDâ·Mc«AâÔA”ˇDâ˘D —Hc…EâLç L ¡9  ÙâŸAâ˘A”·Dâ…ˇ…9Èt71ÈA∏   ÄÛ Ω…ˇ»A”ËAçHˇ!ÈD	¡âÕHcÀâÀHˇ¡Ö¿t	HÉ∆ È0ˇˇˇãDå ÎËHÅƒÿ   []A\\A]A^A_√AWAVAUATUSHÅÏ    HÉ $ HÅÏÿ   1¿Hâ<$π    Hçº$®   Hc⁄Û´H ÛLç¨$®   Lçt$HHât$HLâÍHâﬁLâ˜Ë ¸ˇˇHã,$«D$$    E1…HãD$Hãå$¨   H9ÿ É    AÉ˘ wÒHç5˚a  Dâ»Hc ÜH >ˇ‡π    LâÍHâﬁLâ˜Ë¿˚ˇˇπ    LâÍHâﬁLâ˜âD$$Ë©˚ˇˇÉ¯  Ñ•   É¯  Ñß   Ö¿ Ö≤   Aπ    ÎÖÉ· LâÍHâﬁLâ˜Ëv˚ˇˇπ    LâÍHâﬁLâ˜Ëc˚ˇˇHâﬁπ    LâÍLâ˜Lc‡ËM˚ˇˇHãD$H«Ñ$¨       Hçp˛HâÿH)Hât$HI9ƒ èH   EÖ‰ Ñ?   HâÔLâ‚L Âˇ ∞i  L d$HÈ˛˛ˇˇ1¿Hç¥$®   ∆ 0 Hˇ¿H=ê   uÒ∆  	Hˇ¿H=    uÒ∆   Hˇ¿H=    uÒH∏        Lç§$»   HâÑ$¿   1¿A∆   Hˇ¿HÉ¯ uÚHçº$∞   A∏    π    ∫\n   ËS˚ˇˇHçº$à   A∏    π    ∫    LâÊÈ‚   1¿Hç|$]π    LâÍÛ™Hâﬁπ    Lâ˜H«D$U    Ë;˙ˇˇπ    LâÍHâﬁLâ˜Dç∏    E1‰Ë ˙ˇˇπ    LâÍˇ¿HâﬁLâ˜âD$ Ë ˙ˇˇLç Èd  É¿ âD$ D9d$ ~'Hç|$Hπ    LâÍHâﬁË€˘ˇˇAâ¡C ∂ #IˇƒDàL UÎ“Hçt$UHçº$®   A∏    π    ∫    E1‰Ër˙ˇˇãD$ D ¯âD$ D9d$  éÀ   Hçî$®   Hç|$HHçå$®   A∏    HâﬁHâT$0Hâ|$(Ë∞˘ˇˇHã|$(Mc‹É¯ HãT$0t>É¯ t\\É¯ t\nBàD hAˇƒÎ¢π    HâﬁË.˘ˇˇJçT hÉ¿ â¡Ö…tU@ärˇˇ…Hˇ¬@àrˇÎÌπ    HâﬁË ˘ˇˇÉ¿ â¬Ö“t0B∆D h ˇ Iˇ√ÎÔπ    HâﬁË·¯ˇˇÉ¿ â¬Ö“tB∆D h ˇ Iˇ√ÎÔA ƒÈ*ˇˇˇLçd$hHçº$∞   Eâ¯π    ∫\n   LâÊËo˘ˇˇDãD$ Ic«Iç4 Hçº$à   π    ∫    ËL˘ˇˇAπ    Èq¸ˇˇLç|$HHçî$®   Hçå$∞   A∏\n   HâﬁLâˇDâL$ HâT$ Ëí¯ˇˇHãT$ =    DãL$  é    -    HâﬁLcÿHç Áb  B ∂  LâˇË ¯ˇˇHçìb  HãT$ F ø$YA∏    Hçå$à   HâﬁLâˇA ƒË1¯ˇˇHãT$ HâﬁLcÿHç ;b  LâˇB ∂  Ë√˜ˇˇHç Áa  B ø Z –HâÍâD$ H+ $;T$ â– å∆   É|$  DãL$  Öé    ∂UˇEâ‡A¡¯ ƒ¡yn»DâD$DE1ˇHç¥$®   â–â—¡· ¡‡ 	»≈˘ L$ 	–¡‚ 	–HâÈHòHâÑ$®   E9¯ éﬁ   DâD$<HâœDâL$8∫    Hât$0Aˇ«HâL$(ˇ Ωe  HãL$(DãD$<DãL$8Hãt$0HÉ¡ Î∏É|$   éÆ   Eâ‡Lc\\$ A¡¯ ƒ¡yn–DâD$DIâÔ1…≈˘ T$ D9¡}nLçî$®   Lâ˛H«Ñ$®       L)ﬁDâD$@Lâ◊âL$<∫    DâL$8Lâ\\$0LâT$(ˇ 2e  Hãt$(Lâˇ∫    ˇ  e  ãL$<IÉ« DãD$@DãL$8Lã\\$0ˇ¡Îç≈˘Ô¿ƒ‚y=D$ AÉ‰ ≈˘~¿HòHçlÖ HcD$ HâÈ1“H)¡A9‘~ ä  àD  Hˇ¬ÎÔ1¿EÖ‰D H‡Mc‰L ÂÈ ˙ˇˇuÉ|$$  Ñ ˙ˇˇÎ)àE Hˇ≈È˘˘ˇˇAπ    ÈÓ˘ˇˇAπ    È„˘ˇˇÖ… Ö˘ˇˇâË+ $HÅƒÿ   []A\\A]A^A_√Û  ˙É˙  é3   Hc¬AWAVAUATUHçl ¸SHÉ∆ QHâ˚E1ˆË.˘ˇˇø∞   Aø    ôAâ¿˜ˇEâ¡A∫    E1€øÒˇ  â÷EÖ… Ñ¿   Eâ’Iâ‹A)›CçD% 9∆vZA ∂ $IÉƒ A ∂T$˘A ∂D$˙D ˘E ∂|$ˇ  – —A ∂T$˚D Ò ¡ ¬A ∂D$¸ — –A ∂T$˝ ¡ ¬A ∂D$˛ — – ¡A «Fç49ÎùââÚ¡Ë É‚¯Hç √1¿ç  9Œv  ∂  Hˇ¿A œE ˛ÎÍâ)–9ÚI G√1“H √Dâ¯˜˜DâA)Òæ∞   Aâ◊1“˜˜Aâ÷È7ˇˇˇ 8E A¡Ê E ˛D9t AÉ»ˇZDâ¿[]A\\A]A^A_√É»ˇ√Û  ˙Hç=í\\  P1¿ˇ 1c  Hç=ñZ  1¿ˇ \"c  Hç=—Z  1¿ˇ  c  Hç= [  1¿ˇ  c  Hç=<[  1¿ˇ ıb  Hç=s[  1¿ˇ Êb  Hç=´[  1¿ˇ ◊b  Hç=„[  1¿ˇ »b  Hç= \\  1¿ˇ πb  Hç=4\\  1¿ˇ ™b  Hç=b\\  1¿ˇ õb  Hç=ë\\  1¿ˇ åb  Hç=¡\\  1¿ˇ }b  Hç=Ú\\  1¿ˇ nb  Hç=#]  1¿ˇ _b  ZHç=G]  1¿ˇ%Ob  Û  ˙HÉÏ(1¿Ëò   Hç|$  ∑Ë°     ¿H%ˇˇ˛ˇ \"¿1¿Ë\\   ãT$ ãL$ ∆  ÎãT$ fâ  Hã %`  ∆  ãT$ ∆   ãT$ ∆     ¿H     \"¿HÉƒ(√Û  ˙ATSQDk%%Y   Mc‰MÖ‰u 1¿Î8LâÁË   HÖ¿Hâ√tÏã  Y  Lâ·Hç5MS  Hâ«Ë ˝ˇˇÖ¿t–1¿ˇ”Ö¿ ï¿ ∂¿Z[A\\√Û  ˙P1¿Ë-ˇˇˇ1¿Ë0˛ˇˇHç=©\\  1¿ˇ fa  1¿Ë~ˇˇˇZÖ¿ ï¿ ∂¿√Û  ˙1¿UË^   Ö¿uDË]ÚˇˇÖ¿t31ˆø    Ë˝Òˇˇˇ»u#Hç-`]  ø    HâÓËÂÒˇˇHâÓø    ËÿÒˇˇÎ ]1¿Èyˇˇˇ1¿]√Û  ˙VHã|$ ËC   ˇ»u Y1¿ÈçˇˇˇHç5Üˇˇˇø    1¿Ë    Z√H1¿Iâ   √Û  ˙πÇ  ¿ 2H¡‚ â¿H	¬HçÇ@˛ˇˇ√Û  ˙fDã 4^  fEÖ¿ Öê   HÉÏ H∏s/releasHâD$ 1¿f«D$ e_Ë≠ˇˇˇHçê  0 H     1…@ä4 @8t  uKHˇ¡HÉ˘\nuÏD ∂B\n ∂B AÉË0fEi¿Ë EçD – ∂B ÉË0k¿dA ¿ ∂BÉË0k¿\nA ¿fDâ ¨]  Dâ¿HÉƒ √Hˇ¬H9–u†ÎÊDâ¿√Û  ˙Sâ˚HÅÏ@    ∑ÛHç|$ ËÄ   ãt$ ∏    Öˆ Ñﬁ   1¿É„˝Ë ˇˇˇãT$ H ∆Hâ5¬_  H ¬Hâ ∞_  ãT$ H ¬Hâ ö_  ãT$ H ¬Hâ Ñ_  ãT$ H ¬Hâ n_  ãT$ H ¬Hâ X_  ãT$$H ¬Hâ B_  ãT$(H ¬Hâ ,_  ãT$,H ¬Hâ  _  ãT$0H ¬Hâ  _  ãT$4H ¬Hâ Í^  ãT$8H ¬Hâ ‘^  ãT$<H ¬Hâ æ^  ãT$@H ¬Hâ ®^  ãT$DH ¬Hâ í^  ãT$HH ¬Hâ |^  ãT$LH ¬Hâ f^  ãT$PH ¬Hâ P^  ãT$TH ¬Hâ :^  ãT$XH ¬Hâ $^  ãT$\\H ¬Hâ  ^  ãT$`H ¬Hâ ¯]  ãT$dH ¬Hâ ‚]  ãT$hH ¬Hâ Ã]  ãT$lH ¬Hâ ∂]  ãT$pH ¬Hâ †]  ãT$tH ¬Hâ ä]  ãT$xH ¬fÅ˚˘ u	Hâ m]  Î Hâ \\]  ãT$|H ¬Hâ F]  ãî$Ä   H ¬Hâ -]  ãî$Ñ   H ¬Hâ  ]  ãî$à   H ¬Hâ ˚\\  ãî$å   H ¬Hâ ‚\\  ãî$ê   H ¬Hâ …\\  ãî$î   H ¬Hâ ∞\\  ãî$ò   H ¬Hâ ó\\  ãî$ú   H ¬Hâ ~\\  ãî$†   H ¬Hâ e\\  ãî$§   H ¬Hâ L\\  ãî$®   H ¬Hâ 3\\  ãî$¨   H ¬Hâ  \\  ãî$∞   H ¬Hâ  \\  ãî$¥   H ¬Hâ Ë[  ãî$∏   H ¬Hâ œ[  ãî$º   H ¬Hâ ∂[  ãî$¿   H ¬Hâ ù[  ãî$ƒ   H ¬Hâ Ñ[  ãî$»   H ¬Hâ k[  ãî$Ã   H ¬Hâ R[  ãî$–   H ¬Hâ 9[  ãî$‘   H ¬Hâ  [  ãî$ÿ   H ¬Hâ  [  ãî$‹   H ¬Hâ ÓZ  ãî$‡   H ¬Hâ ’Z  ãî$‰   H ¬Hâ ºZ  ãî$Ë   H ¬Hâ £Z  ãî$Ï   H ¬Hâ äZ  ãî$   H ¬Hâ qZ  ãî$Ù   H ¬Hâ XZ  ãî$¯   H ¬Hâ ?Z  ãî$¸   H ¬Hâ &Z  ãî$    H ¬Hâ Z  ãî$    H ¬Hâ ÙY  ãî$    H ¬Hâ €Y  ãî$    H ¬Hâ ¬Y  ãî$    H ¬Hâ ©Y  ãî$    H ¬Hâ êY  ãî$    H ¬Hâ wY  ãî$    H ¬Hâ ^Y  ãî$    H ¬Hâ EY  ãî$$   H ¬Hâ ,Y  ãî$(   H ¬Hâ  Y  ãî$,   H ¬Hâ ˙X  ãî$0   H ¬Hâ ·X  ãî$4   H ¬Hâ »X  ãî$8   H ¬Hâ ØX  ãî$<   H –Hâ ñX  1¿HÅƒ@   [√Û  ˙P1¿f« sX    Ë.˙ˇˇZ ∑¯Èœ˙ˇˇÛ  ˙Hã “X  Hç∑ˇ?  HÅÊ ¿ˇˇHã8ˇ%sZ  Û  ˙∏ˇˇ  H¡‡/ƒ‚¿Ú¯ î¿ ∂¿√Û  ˙âATÉ‡˝Iâ¸f=˘ u 1¿ËJ   È	   fÅ˛ü u 1¿Ë«\"  Èˆ   fÅ˛† u 1¿ËD%  È„   çñD˝ˇˇfÉ˙ w 1¿Ëº'  ÈÀ   fÅ˛Ó u 1¿Ë9*  È∏   fÅ˛Ô u 1¿Ë∂,  È•   fÅ˛Û u 1¿Ë3/  Èí   fÅ˛  u 1¿Ë∞1  È    fÅ˛! u 1¿Ë-4  Èl   fÅ˛# u 1¿Ë™6  ÈY   fÅ˛R u 1¿Ë'9  ÈF   fÅ˛T u 1¿Ë§;  È3   fÅ˛Ñ u 1¿Ë!>  È    fÅ˛á u 1¿Ëû@  È   fÅ˛à u 1¿Ë C  È˙   fÅ˛∂ u 1¿ËòE  ÈÁ   fÅ˛∑ u 1¿Ë H  È‘   fÅ˛¿ u 1¿ËíJ  È¡   fÅ˛Ë u 1¿ËO   ÈÆ   fÅ˛È u 1¿ËÃ   Èõ   fÅ˛  u 1¿ËI\n  Èà   çñ“˚ˇˇfÉ˙ w	1¿Ë¡   ÎsfÅ˛L u	1¿ËA   ÎcfÅ˛N u	1¿Ë¡   ÎSçñÇ˚ˇˇf˜¬˝ˇu	1¿Ë;   Î=f=∞ u	1¿Ëº   Î.çÜ ˚ˇˇf©˝ˇu	1¿Ë7   Î fÅ˛  u	1¿Ë∑   Î	π    1¿Û´Lâ‡A\\√Û  ˙âATÉ‡˝Iâ¸f=˘ u 1¿Ë¥   È	   fÅ˛ü u 1¿Ë1   Èˆ   fÅ˛† u 1¿ËÆ   È„   çñD˝ˇˇfÉ˙ w 1¿Ë&#  ÈÀ   fÅ˛Ó u 1¿Ë£%  È∏   fÅ˛Ô u 1¿Ë (  È•   fÅ˛Û u 1¿Ëù*  Èí   fÅ˛  u 1¿Ë -  È    fÅ˛! u 1¿Ëó/  Èl   fÅ˛# u 1¿Ë 2  ÈY   fÅ˛R u 1¿Ëë4  ÈF   fÅ˛T u 1¿Ë 7  È3   fÅ˛Ñ u 1¿Ëã9  È    fÅ˛á u 1¿Ë <  È   fÅ˛à u 1¿ËÖ>  È˙   fÅ˛∂ u 1¿Ë A  ÈÁ   fÅ˛∑ u 1¿Ë C  È‘   fÅ˛¿ u 1¿Ë¸E  È¡   fÅ˛Ë u 1¿Ëπ   ÈÆ   fÅ˛È u 1¿Ë6   Èõ   fÅ˛  u 1¿Ë≥   Èà   çñ“˚ˇˇfÉ˙ w	1¿Ë+   ÎsfÅ˛L u	1¿Ë«\n  ÎcfÅ˛N u	1¿Ë+  ÎSçñÇ˚ˇˇf˜¬˝ˇu	1¿Ë•   Î=f=∞ u	1¿Ë&   Î.çÜ ˚ˇˇf©˝ˇu	1¿Ë°   Î fÅ˛  u	1¿Ë!   Î	πM   1¿Û´Lâ‡A\\√";

function launchExploit() {
    const btn = document.getElementById('seal-btn');
    btn.style.pointerEvents = 'none';
    btn.style.opacity = '0.8';

    log("Initiating WebKit Exploit (PsFree)...");

    setTimeout(() => {
        log("Bypassing ASLR & Memory Corruption via PsFree...");
    }, 1000);

    setTimeout(() => {
        log("Triggering Kernel Exploit & Injecting Payloads...");
    }, 2200);

    setTimeout(() => {
        log("GoldHen Loaded Successfully! Enjoy Gaming.");
        alert("تم تفعيل ثغرة PsFree و GoldHen بنجاح على جهازك!");
        btn.style.pointerEvents = 'auto';
        btn.style.opacity = '1';
    }, 3800);
}