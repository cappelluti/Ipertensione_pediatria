function LMS(){
    if (sesso=="m") {
        switch (eta_mesi) {
            case 0: L=1.267004226; M=49.98888408; S=0.053112191; break;
            case 0.5: L=0.511237696; M=52.6959753; S=0.048692684; break;
            case 1.5: L=-0.45224446; M=56.62842855; S=0.04411683; break;
            case 2.5: L=-0.990594599; M=59.60895343; S=0.041795583; break;
            case 3.5: L=-1.285837689; M=62.07700027; S=0.040454126; break;
            case 4.5: L=-1.43031238; M=64.2168641; S=0.039633879; break;
            case 5.5: L=-1.47657547; M=66.1253149; S=0.039123813; break;
            case 6.5: L=-1.456837849; M=67.8601799; S=0.038811994; break;
            case 7.5: L=-1.391898768; M=69.45908458; S=0.038633209; break;
            case 8.5: L=-1.29571459; M=70.94803912; S=0.038546833; break;
            case 9.5: L=-1.177919048; M=72.34586111; S=0.038526262; break;
            case 10.5: L=-1.045326049; M=73.6666541; S=0.038553387; break;
            case 11.5: L=-0.902800887; M=74.92129717; S=0.038615501; break;
            case 12.5: L=-0.753908107; M=76.11837536; S=0.038703461; break;
            case 13.5: L=-0.601263523; M=77.26479911; S=0.038810557; break;
            case 14.5: L=-0.446805039; M=78.36622309; S=0.038931784; break;
            case 15.5: L=-0.291974772; M=79.4273405; S=0.039063356; break;
            case 16.5: L=-0.13784767; M=80.45209492; S=0.039202382; break;
            case 17.5: L=0.014776155; M=81.44383603; S=0.039346629; break;
            case 18.5: L=0.165304169; M=82.40543643; S=0.039494365; break;
            case 19.5: L=0.313301809; M=83.33938063; S=0.039644238; break;
            case 20.5: L=0.458455471; M=84.24783394; S=0.039795189; break;
            case 21.5: L=0.600544631; M=85.13269658; S=0.039946388; break;
            case 22.5: L=0.739438953; M=85.9956488; S=0.040097181; break;
            case 23.5: L=0.875000447; M=86.8381751; S=0.04024706; break;
            case 24.5: L=1.00720807; M=86.86160934; S=0.040395626; break;
            case 25.5: L=0.837251351; M=87.65247282; S=0.040577525; break;
            case 26.5: L=0.681492975; M=88.42326434; S=0.040723122; break;
            case 27.5: L=0.538779654; M=89.17549228; S=0.040833194; break;
            case 28.5: L=0.407697153; M=89.91040853; S=0.040909059; break;
            case 29.5: L=0.286762453; M=90.62907762; S=0.040952433; break;
            case 30.5: L=0.174489485; M=91.33242379; S=0.04096533; break;
            case 31.5: L=0.069444521; M=92.02127167; S=0.040949976; break;
            case 32.5: L=-0.029720564; M=92.69637946; S=0.040908737; break;
            case 33.5: L=-0.124251789; M=93.35846546; S=0.040844062; break;
            case 34.5: L=-0.215288396; M=94.00822923; S=0.040758431; break;
            case 35.5: L=-0.30385434; M=94.64636981; S=0.040654312; break;
            case 36.5: L=-0.390918369; M=95.27359106; S=0.04053412; break;
            case 37.5: L=-0.254801167; M=95.91474929; S=0.040572876; break;
            case 38.5: L=-0.125654535; M=96.54734328; S=0.04061691; break;
            case 39.5: L=-0.00316735; M=97.17191309; S=0.040666414; break;
            case 40.5: L=0.11291221; M=97.78897727; S=0.040721467; break;
            case 41.5: L=0.222754969; M=98.3990283; S=0.040782045; break;
            case 42.5: L=0.326530126; M=99.00254338; S=0.040848042; break;
            case 43.5: L=0.42436156; M=99.599977; S=0.040919281; break;
            case 44.5: L=0.516353108; M=100.191764; S=0.040995524; break;
            case 45.5: L=0.602595306; M=100.7783198; S=0.041076485; break;
            case 46.5: L=0.683170764; M=101.3600411; S=0.041161838; break;
            case 47.5: L=0.758158406; M=101.9373058; S=0.041251224; break;
            case 48.5: L=0.827636736; M=102.5104735; S=0.041344257; break;
            case 49.5: L=0.891686306; M=103.0798852; S=0.041440534; break;
            case 50.5: L=0.95039153; M=103.645864; S=0.041539635; break;
            case 51.5: L=1.003830006; M=104.208713; S=0.041641136; break;
            case 52.5: L=1.05213569; M=104.7687256; S=0.041744602; break;
            case 53.5: L=1.0953669; M=105.3261638; S=0.041849607; break;
            case 54.5: L=1.133652119; M=105.8812823; S=0.041955723; break;
            case 55.5: L=1.167104213; M=106.4343146; S=0.042062532; break;
            case 56.5: L=1.195845353; M=106.9854769; S=0.042169628; break;
            case 57.5: L=1.220004233; M=107.534968; S=0.042276619; break;
            case 58.5: L=1.239715856; M=108.0829695; S=0.042383129; break;
            case 59.5: L=1.255121285; M=108.6296457; S=0.042488804; break;
            case 60.5: L=1.266367398; M=109.1751441; S=0.042593311; break;
            case 61.5: L=1.273606657; M=109.7195954; S=0.042696342; break;
            case 62.5: L=1.276996893; M=110.2631136; S=0.042797615; break;
            case 63.5: L=1.276701119; M=110.8057967; S=0.042896877; break;
            case 64.5: L=1.272887366; M=111.3477265; S=0.042993904; break;
            case 65.5: L=1.265728536; M=111.8889694; S=0.043088503; break;
            case 66.5: L=1.255402281; M=112.4295761; S=0.043180513; break;
            case 67.5: L=1.242090871; M=112.9695827; S=0.043269806; break;
            case 68.5: L=1.225981067; M=113.5090108; S=0.043356287; break;
            case 69.5: L=1.207263978; M=114.0478678; S=0.043439893; break;
            case 70.5: L=1.186140222; M=114.5861486; S=0.043520597; break;
            case 71.5: L=1.162796198; M=115.1238315; S=0.043598407; break;
            case 72.5: L=1.137442868; M=115.6608862; S=0.043673359; break;
            case 73.5: L=1.110286487; M=116.1972691; S=0.043745523; break;
            case 74.5: L=1.081536236; M=116.732925; S=0.043815003; break;
            case 75.5: L=1.05140374; M=117.2677879; S=0.043881929; break;
            case 76.5: L=1.020102497; M=117.8017819; S=0.043946461; break;
            case 77.5: L=0.987847213; M=118.3348215; S=0.044008785; break;
            case 78.5: L=0.954853043; M=118.8668123; S=0.044069112; break;
            case 79.5: L=0.921334742; M=119.397652; S=0.044127675; break;
            case 80.5: L=0.887505723; M=119.9272309; S=0.044184725; break;
            case 81.5: L=0.85357703; M=120.455433; S=0.044240532; break;
            case 82.5: L=0.819756239; M=120.9821362; S=0.044295379; break;
            case 83.5: L=0.786246296; M=121.5072136; S=0.044349559; break;
            case 84.5: L=0.753244292; M=122.0305342; S=0.044403374; break;
            case 85.5: L=0.720940222; M=122.5519634; S=0.04445713; break;
            case 86.5: L=0.689515708; M=123.0713645; S=0.044511135; break;
            case 87.5: L=0.659142731; M=123.588599; S=0.044565693; break;
            case 88.5: L=0.629997853; M=124.1035312; S=0.044621104; break;
            case 89.5: L=0.602203984; M=124.6160161; S=0.044677662; break;
            case 90.5: L=0.575908038; M=125.1259182; S=0.044735646; break;
            case 91.5: L=0.55123134; M=125.6331012; S=0.044795322; break;
            case 92.5: L=0.528279901; M=126.1374319; S=0.044856941; break;
            case 93.5: L=0.507143576; M=126.6387804; S=0.04492073; break;
            case 94.5: L=0.487895344; M=127.1370217; S=0.044986899; break;
            case 95.5: L=0.470590753; M=127.6320362; S=0.045055632; break;
            case 96.5: L=0.455267507; M=128.1237104; S=0.045127088; break;
            case 97.5: L=0.441945241; M=128.6119383; S=0.045201399; break;
            case 98.5: L=0.430625458; M=129.096622; S=0.045278671; break;
            case 99.5: L=0.421291648; M=129.5776723; S=0.045358979; break;
            case 100.5: L=0.413909588; M=130.0550101; S=0.045442372; break;
            case 101.5: L=0.408427813; M=130.5285669; S=0.045528869; break;
            case 102.5: L=0.404778262; M=130.9982857; S=0.045618459; break;
            case 103.5: L=0.402877077; M=131.4641218; S=0.045711105; break;
            case 104.5: L=0.402625561; M=131.9260439; S=0.045806742; break;
            case 105.5: L=0.40391127; M=132.3840348; S=0.045905281; break;
            case 106.5: L=0.406609232; M=132.838092; S=0.046006604; break;
            case 107.5: L=0.410583274; M=133.2882291; S=0.046110573; break;
            case 108.5: L=0.415687443; M=133.7344759; S=0.046217028; break;
            case 109.5: L=0.421767514; M=134.1768801; S=0.04632579; break;
            case 110.5: L=0.428662551; M=134.6155076; S=0.046436662; break;
            case 111.5: L=0.436206531; M=135.0504433; S=0.04654943; break;
            case 112.5: L=0.44423; M=135.4817925; S=0.046663871; break;
            case 113.5: L=0.45256176; M=135.9096813; S=0.046779748; break;
            case 114.5: L=0.461030578; M=136.3342577; S=0.046896817; break;
            case 115.5: L=0.469466904; M=136.7556923; S=0.047014827; break;
            case 116.5: L=0.477704608; M=137.1741794; S=0.047133525; break;
            case 117.5: L=0.48558272; M=137.5899378; S=0.047252654; break;
            case 118.5: L=0.492947182; M=138.0032114; S=0.047371961; break;
            case 119.5: L=0.499652617; M=138.4142703; S=0.047491194; break;
            case 120.5: L=0.505564115; M=138.8234114; S=0.047610108; break;
            case 121.5: L=0.510559047; M=139.2309592; S=0.047728463; break;
            case 122.5: L=0.514528903; M=139.6372663; S=0.04784603; break;
            case 123.5: L=0.517381177; M=140.042714; S=0.047962592; break;
            case 124.5: L=0.519041285; M=140.4477127; S=0.048077942; break;
            case 125.5: L=0.519454524; M=140.8527022; S=0.048191889; break;
            case 126.5: L=0.518588072; M=141.2581515; S=0.048304259; break;
            case 127.5: L=0.516433004; M=141.6645592; S=0.048414893; break;
            case 128.5: L=0.513006312; M=142.072452; S=0.048523648; break;
            case 129.5: L=0.508352901; M=142.4823852; S=0.048630402; break;
            case 130.5: L=0.502547502; M=142.8949403; S=0.04873505; break;
            case 131.5: L=0.495696454; M=143.3107241; S=0.048837504; break;
            case 132.5: L=0.487939275; M=143.7303663; S=0.048937694; break;
            case 133.5: L=0.479449924; M=144.1545167; S=0.049035564; break;
            case 134.5: L=0.470437652; M=144.5838414; S=0.049131073; break;
            case 135.5: L=0.461147305; M=145.0190192; S=0.049224189; break;
            case 136.5: L=0.451858946; M=145.4607359; S=0.049314887; break;
            case 137.5: L=0.442886661; M=145.9096784; S=0.049403145; break;
            case 138.5: L=0.434576385; M=146.3665278; S=0.049488934; break;
            case 139.5: L=0.427302633; M=146.8319513; S=0.049572216; break;
            case 140.5: L=0.421464027; M=147.3065929; S=0.049652935; break;
            case 141.5: L=0.417477538; M=147.7910635; S=0.049731004; break;
            case 142.5: L=0.415771438; M=148.2859294; S=0.0498063; break;
            case 143.5: L=0.416777012; M=148.7917006; S=0.04987865; break;
            case 144.5: L=0.420919142; M=149.3088178; S=0.049947823; break;
            case 145.5: L=0.428606007; M=149.8376391; S=0.050013518; break;
            case 146.5: L=0.440218167; M=150.3784267; S=0.050075353; break;
            case 147.5: L=0.456097443; M=150.9313331; S=0.050132858; break;
            case 148.5: L=0.476536014; M=151.4963887; S=0.050185471; break;
            case 149.5: L=0.501766234; M=152.0734897; S=0.050232532; break;
            case 150.5: L=0.531951655; M=152.6623878; S=0.050273285; break;
            case 151.5: L=0.567179725; M=153.2626819; S=0.050306885; break;
            case 152.5: L=0.607456565; M=153.8738124; S=0.050332406; break;
            case 153.5: L=0.652704121; M=154.495058; S=0.05034886; break;
            case 154.5: L=0.702759868; M=155.1255365; S=0.050355216; break;
            case 155.5: L=0.757379106; M=155.7642086; S=0.050350423; break;
            case 156.5: L=0.816239713; M=156.4098858; S=0.050333444; break;
            case 157.5: L=0.878947416; M=157.0612415; S=0.050303283; break;
            case 158.5: L=0.945053486; M=157.7168289; S=0.050259018; break;
            case 159.5: L=1.014046108; M=158.3750929; S=0.050199837; break;
            case 160.5: L=1.085383319; M=159.034399; S=0.050125062; break;
            case 161.5: L=1.158487278; M=159.6930501; S=0.05003418; break;
            case 162.5: L=1.232768816; M=160.3493168; S=0.049926861; break;
            case 163.5: L=1.307628899; M=161.0014586; S=0.049802977; break;
            case 164.5: L=1.382473225; M=161.6477515; S=0.04966261; break;
            case 165.5: L=1.456720479; M=162.2865119; S=0.049506051; break;
            case 166.5: L=1.529810247; M=162.9161202; S=0.049333801; break;
            case 167.5: L=1.601219573; M=163.535045; S=0.049146553; break;
            case 168.5: L=1.670433444; M=164.1418486; S=0.04894519; break;
            case 169.5: L=1.736995571; M=164.7352199; S=0.048730749; break;
            case 170.5: L=1.800483802; M=165.3139755; S=0.048504404; break;
            case 171.5: L=1.860518777; M=165.8770715; S=0.048267442; break;
            case 172.5: L=1.916765525; M=166.4236087; S=0.04802123; break;
            case 173.5: L=1.968934444; M=166.9528354; S=0.047767192; break;
            case 174.5: L=2.016781776; M=167.4641466; S=0.047506783; break;
            case 175.5: L=2.060109658; M=167.9570814; S=0.047241456; break;
            case 176.5: L=2.098765817; M=168.4313175; S=0.04697265; break;
            case 177.5: L=2.132642948; M=168.8866644; S=0.046701759; break;
            case 178.5: L=2.16167779; M=169.3230548; S=0.046430122; break;
            case 179.5: L=2.185849904; M=169.7405351; S=0.046159004; break;
            case 180.5: L=2.205180153; M=170.139255; S=0.045889585; break;
            case 181.5: L=2.219728869; M=170.5194567; S=0.045622955; break;
            case 182.5: L=2.2295937; M=170.881464; S=0.045360101; break;
            case 183.5: L=2.234907144; M=171.2256717; S=0.045101913; break;
            case 184.5: L=2.235833767; M=171.5525345; S=0.044849174; break;
            case 185.5: L=2.232567138; M=171.8625576; S=0.044602566; break;
            case 186.5: L=2.2253265; M=172.1562865; S=0.044362674; break;
            case 187.5: L=2.214353232; M=172.4342983; S=0.044129985; break;
            case 188.5: L=2.199905902; M=172.6971935; S=0.043904897; break;
            case 189.5: L=2.182262864; M=172.9455898; S=0.043687723; break;
            case 190.5: L=2.161704969; M=173.180112; S=0.043478698; break;
            case 191.5: L=2.138524662; M=173.4013896; S=0.043277987; break;
            case 192.5: L=2.113023423; M=173.6100518; S=0.043085685; break;
            case 193.5: L=2.085490286; M=173.8067179; S=0.042901835; break;
            case 194.5: L=2.0562195; M=173.9919998; S=0.042726424; break;
            case 195.5: L=2.025496648; M=174.1664951; S=0.042559396; break;
            case 196.5: L=1.993598182; M=174.3307855; S=0.042400652; break;
            case 197.5: L=1.960789092; M=174.4854344; S=0.042250063; break;
            case 198.5: L=1.927320937; M=174.6309856; S=0.042107465; break;
            case 199.5: L=1.89343024; M=174.7679617; S=0.041972676; break;
            case 200.5: L=1.859337259; M=174.8968634; S=0.041845488; break;
            case 201.5: L=1.825245107; M=175.0181691; S=0.041725679; break;
            case 202.5: L=1.791339209; M=175.1323345; S=0.041613015; break;
            case 203.5: L=1.757787065; M=175.2397926; S=0.041507249; break;
            case 204.5: L=1.724738292; M=175.340954; S=0.041408129; break;
            case 205.5: L=1.692324905; M=175.4362071; S=0.041315398; break;
            case 206.5: L=1.660661815; M=175.5259191; S=0.041228796; break;
            case 207.5: L=1.629847495; M=175.6104358; S=0.04114806; break;
            case 208.5: L=1.599964788; M=175.690083; S=0.041072931; break;
            case 209.5: L=1.571081817; M=175.7651671; S=0.04100315; break;
            case 210.5: L=1.543252982; M=175.8359757; S=0.040938463; break;
            case 211.5: L=1.516519998; M=175.9027788; S=0.040878617; break;
            case 212.5: L=1.490912963; M=175.9658293; S=0.040823368; break;
            case 213.5: L=1.466451429; M=176.0253641; S=0.040772475; break;
            case 214.5: L=1.44314546; M=176.081605; S=0.040725706; break;
            case 215.5: L=1.420996665; M=176.1347593; S=0.040682834; break;
            case 216.5: L=1.399999187; M=176.1850208; S=0.04064364; break;
            case 217.5: L=1.380140651; M=176.2325707; S=0.040607913; break;
            case 218.5: L=1.361403047; M=176.2775781; S=0.040575448; break;
            case 219.5: L=1.343763564; M=176.3202008; S=0.040546051; break;
            case 220.5: L=1.327195355; M=176.3605864; S=0.040519532; break;
            case 221.5: L=1.311668242; M=176.3988725; S=0.040495713; break;
            case 222.5: L=1.297149359; M=176.4351874; S=0.040474421; break;
            case 223.5: L=1.283603728; M=176.469651; S=0.040455493; break;
            case 224.5: L=1.270994782; M=176.5023751; S=0.040438773; break;
            case 225.5: L=1.25928483; M=176.533464; S=0.040424111; break;
            case 226.5: L=1.248435461; M=176.5630153; S=0.040411366; break;
            case 227.5: L=1.23840791; M=176.5911197; S=0.040400405; break;
            case 228.5: L=1.229163362; M=176.6178621; S=0.040391101; break;
            case 229.5: L=1.220663228; M=176.6433219; S=0.040383334; break;
            case 230.5: L=1.212869374; M=176.6675729; S=0.04037699; break;
            case 231.5: L=1.20574431; M=176.6906844; S=0.040371962; break;
            case 232.5: L=1.199251356; M=176.712721; S=0.040368149; break;
            case 233.5: L=1.19335477; M=176.733743; S=0.040365456; break;
            case 234.5: L=1.188019859; M=176.753807; S=0.040363795; break;
            case 235.5: L=1.183213059; M=176.7729657; S=0.04036308; break;
            case 236.5: L=1.178901998; M=176.7912687; S=0.040363233; break;
            case 237.5: L=1.175055543; M=176.8087622; S=0.040364179; break;
            case 238.5: L=1.171643828; M=176.8254895; S=0.04036585; break;
            case 239.5: L=1.16863827; M=176.8414914; S=0.04036818; break;
            case 240: L=1.167279219; M=176.8492322; S=0.040369574; break;
        }
    } else {
        switch (eta_mesi) {
            case 0: L=-1.295960857; M=49.28639612; S=0.05008556; break;
            case 0.5: L=-0.809249882; M=51.68358057; S=0.046818545; break;
            case 1.5: L=-0.050782985; M=55.28612813; S=0.0434439; break;
            case 2.5: L=0.476851407; M=58.09381906; S=0.041716103; break;
            case 3.5: L=0.843299612; M=60.45980763; S=0.040705173; break;
            case 4.5: L=1.097562257; M=62.53669656; S=0.040079765; break;
            case 5.5: L=1.272509641; M=64.40632762; S=0.039686845; break;
            case 6.5: L=1.390428859; M=66.11841553; S=0.039444555; break;
            case 7.5: L=1.466733925; M=67.70574419; S=0.039304738; break;
            case 8.5: L=1.512301976; M=69.19123614; S=0.03923711; break;
            case 9.5: L=1.534950767; M=70.59163924; S=0.039221665; break;
            case 10.5: L=1.540390875; M=71.91961673; S=0.039244672; break;
            case 11.5: L=1.532852892; M=73.1850104; S=0.03929642; break;
            case 12.5: L=1.51550947; M=74.39564379; S=0.039369875; break;
            case 13.5: L=1.490765028; M=75.5578544; S=0.039459832; break;
            case 14.5: L=1.460458255; M=76.67685871; S=0.039562382; break;
            case 15.5: L=1.426006009; M=77.75700986; S=0.039674542; break;
            case 16.5: L=1.388507095; M=78.80198406; S=0.03979401; break;
            case 17.5: L=1.348818127; M=79.81491852; S=0.039918994; break;
            case 18.5: L=1.307609654; M=80.79851532; S=0.040048084; break;
            case 19.5: L=1.265408149; M=81.75512092; S=0.040180162; break;
            case 20.5: L=1.222627732; M=82.6867881; S=0.04031434; break;
            case 21.5: L=1.179594365; M=83.59532461; S=0.040449904; break;
            case 22.5: L=1.136564448; M=84.48233206; S=0.040586283; break;
            case 23.5: L=1.093731947; M=85.34923624; S=0.040723015; break;
            case 24.5: L=1.051272912; M=85.3973169; S=0.040859727; break;
            case 25.5: L=1.041951175; M=86.29026318; S=0.041142161; break;
            case 26.5: L=1.012592236; M=87.15714182; S=0.041349399; break;
            case 27.5: L=0.970541909; M=87.9960184; S=0.041500428; break;
            case 28.5: L=0.921129988; M=88.8055115; S=0.041610508; break;
            case 29.5: L=0.868221392; M=89.58476689; S=0.041691761; break;
            case 30.5: L=0.81454413; M=90.33341722; S=0.04175368; break;
            case 31.5: L=0.761957977; M=91.0515436; S=0.041803562; break;
            case 32.5: L=0.711660228; M=91.7396352; S=0.041846882; break;
            case 33.5: L=0.664323379; M=92.39854429; S=0.041887626; break;
            case 34.5: L=0.620285102; M=93.02945392; S=0.041928568; break;
            case 35.5: L=0.57955631; M=93.63382278; S=0.041971514; break;
            case 36.5: L=0.54198094; M=94.21335709; S=0.042017509; break;
            case 37.5: L=0.511429832; M=94.79643239; S=0.042104522; break;
            case 38.5: L=0.482799937; M=95.37391918; S=0.042199507; break;
            case 39.5: L=0.455521041; M=95.94692677; S=0.042300333; break;
            case 40.5: L=0.429150288; M=96.51644912; S=0.042405225; break;
            case 41.5: L=0.403351725; M=97.08337211; S=0.042512706; break;
            case 42.5: L=0.377878239; M=97.6484807; S=0.042621565; break;
            case 43.5: L=0.352555862; M=98.21246579; S=0.042730809; break;
            case 44.5: L=0.327270297; M=98.77593069; S=0.042839638; break;
            case 45.5: L=0.301955463; M=99.33939735; S=0.042947412; break;
            case 46.5: L=0.276583851; M=99.9033122; S=0.043053626; break;
            case 47.5: L=0.251158446; M=100.4680516; S=0.043157889; break;
            case 48.5: L=0.225705996; M=101.033927; S=0.043259907; break;
            case 49.5: L=0.20027145; M=101.6011898; S=0.043359463; break;
            case 50.5: L=0.174913356; M=102.1700358; S=0.043456406; break;
            case 51.5: L=0.149700081; M=102.7406094; S=0.043550638; break;
            case 52.5: L=0.12470671; M=103.3130077; S=0.043642107; break;
            case 53.5: L=0.100012514; M=103.8872839; S=0.043730791; break;
            case 54.5: L=0.075698881; M=104.4634511; S=0.043816701; break;
            case 55.5: L=0.051847635; M=105.0414853; S=0.043899867; break;
            case 56.5: L=0.02853967; M=105.6213287; S=0.043980337; break;
            case 57.5: L=0.005853853; M=106.2028921; S=0.044058171; break;
            case 58.5: L=-0.016133871; M=106.7860583; S=0.04413344; break;
            case 59.5: L=-0.037351181; M=107.3706841; S=0.044206218; break;
            case 60.5: L=-0.057729947; M=107.9566031; S=0.044276588; break;
            case 61.5: L=-0.077206672; M=108.5436278; S=0.044344632; break;
            case 62.5: L=-0.09572283; M=109.1315521; S=0.044410436; break;
            case 63.5: L=-0.113225128; M=109.7201531; S=0.044474084; break;
            case 64.5: L=-0.129665689; M=110.3091934; S=0.044535662; break;
            case 65.5: L=-0.145002179; M=110.8984228; S=0.044595254; break;
            case 66.5: L=-0.159197885; M=111.4875806; S=0.044652942; break;
            case 67.5: L=-0.172221748; M=112.0763967; S=0.044708809; break;
            case 68.5: L=-0.184048358; M=112.6645943; S=0.044762936; break;
            case 69.5: L=-0.194660215; M=113.2518902; S=0.044815402; break;
            case 70.5: L=-0.204030559; M=113.8380006; S=0.044866288; break;
            case 71.5: L=-0.212174408; M=114.4226317; S=0.044915672; break;
            case 72.5: L=-0.219069129; M=115.0054978; S=0.044963636; break;
            case 73.5: L=-0.224722166; M=115.5863089; S=0.045010259; break;
            case 74.5: L=-0.229140412; M=116.1647782; S=0.045055624; break;
            case 75.5: L=-0.232335686; M=116.7406221; S=0.045099817; break;
            case 76.5: L=-0.234324563; M=117.3135622; S=0.045142924; break;
            case 77.5: L=-0.235128195; M=117.8833259; S=0.045185036; break;
            case 78.5: L=-0.234772114; M=118.4496481; S=0.045226249; break;
            case 79.5: L=-0.233286033; M=119.0122722; S=0.045266662; break;
            case 80.5: L=-0.230703633; M=119.5709513; S=0.045306383; break;
            case 81.5: L=-0.227062344; M=120.1254495; S=0.045345524; break;
            case 82.5: L=-0.222403111; M=120.6755427; S=0.045384203; break;
            case 83.5: L=-0.216770161; M=121.22102; S=0.045422551; break;
            case 84.5: L=-0.210210748; M=121.7616844; S=0.045460702; break;
            case 85.5: L=-0.202774891; M=122.2973542; S=0.045498803; break;
            case 86.5: L=-0.194515104; M=122.827864; S=0.045537012; break;
            case 87.5: L=-0.185486099; M=123.3530652; S=0.045575495; break;
            case 88.5: L=-0.175744476; M=123.8728276; S=0.045614432; break;
            case 89.5: L=-0.165348396; M=124.38704; S=0.045654016; break;
            case 90.5: L=-0.15435722; M=124.8956114; S=0.04569445; break;
            case 91.5: L=-0.142831123; M=125.398472; S=0.045735953; break;
            case 92.5: L=-0.130830669; M=125.895574; S=0.045778759; break;
            case 93.5: L=-0.118416354; M=126.3868929; S=0.045823114; break;
            case 94.5: L=-0.105648092; M=126.8724284; S=0.04586928; break;
            case 95.5: L=-0.092584657; M=127.3522056; S=0.045917535; break;
            case 96.5: L=-0.079283065; M=127.8262759; S=0.045968169; break;
            case 97.5: L=-0.065797888; M=128.2947187; S=0.04602149; break;
            case 98.5: L=-0.0521805; M=128.757642; S=0.046077818; break;
            case 99.5: L=-0.03847825; M=129.2151839; S=0.046137487; break;
            case 100.5: L=-0.024733545; M=129.6675143; S=0.046200842; break;
            case 101.5: L=-0.010982868; M=130.1148354; S=0.04626824; break;
            case 102.5: L=0.002744306; M=130.5573839; S=0.046340046; break;
            case 103.5: L=0.016426655; M=130.995432; S=0.046416629; break;
            case 104.5: L=0.030052231; M=131.4292887; S=0.046498361; break;
            case 105.5: L=0.043619747; M=131.8593015; S=0.046585611; break;
            case 106.5: L=0.05713988; M=132.2858574; S=0.046678741; break;
            case 107.5: L=0.070636605; M=132.7093845; S=0.046778099; break;
            case 108.5: L=0.08414848; M=133.1303527; S=0.04688401; break;
            case 109.5: L=0.097729873; M=133.5492749; S=0.046996769; break;
            case 110.5: L=0.111452039; M=133.9667073; S=0.047116633; break;
            case 111.5: L=0.125404005; M=134.3832499; S=0.047243801; break;
            case 112.5: L=0.13969316; M=134.7995463; S=0.047378413; break;
            case 113.5: L=0.154445482; M=135.2162826; S=0.047520521; break;
            case 114.5: L=0.169805275; M=135.634186; S=0.047670085; break;
            case 115.5: L=0.185934346; M=136.0540223; S=0.047826946; break;
            case 116.5: L=0.203010488; M=136.4765925; S=0.04799081; break;
            case 117.5: L=0.2212252; M=136.9027281; S=0.048161228; break;
            case 118.5: L=0.240780542; M=137.3332846; S=0.04833757; break;
            case 119.5: L=0.261885086; M=137.7691339; S=0.048519011; break;
            case 120.5: L=0.284748919; M=138.2111552; S=0.048704503; break;
            case 121.5: L=0.309577733; M=138.6602228; S=0.048892759; break;
            case 122.5: L=0.336566048; M=139.1171933; S=0.049082239; break;
            case 123.5: L=0.365889711; M=139.5828898; S=0.049271137; break;
            case 124.5: L=0.397699038; M=140.0580848; S=0.049457371; break;
            case 125.5: L=0.432104409; M=140.5434787; S=0.049638596; break;
            case 126.5: L=0.46917993; M=141.0396832; S=0.049812203; break;
            case 127.5: L=0.508943272; M=141.5471945; S=0.049975355; break;
            case 128.5: L=0.551354277; M=142.0663731; S=0.050125012; break;
            case 129.5: L=0.596307363; M=142.59742; S=0.050257992; break;
            case 130.5: L=0.643626542; M=143.1403553; S=0.050371024; break;
            case 131.5: L=0.693062173; M=143.6949981; S=0.050460835; break;
            case 132.5: L=0.744289752; M=144.2609497; S=0.050524236; break;
            case 133.5: L=0.79691098; M=144.8375809; S=0.050558224; break;
            case 134.5: L=0.85045728; M=145.4240246; S=0.050560083; break;
            case 135.5: L=0.904395871; M=146.0191748; S=0.050527494; break;
            case 136.5: L=0.958138449; M=146.621692; S=0.050458634; break;
            case 137.5: L=1.011054559; M=147.2300177; S=0.050352269; break;
            case 138.5: L=1.062474568; M=147.8423918; S=0.050207825; break;
            case 139.5: L=1.111727029; M=148.4568879; S=0.050025434; break;
            case 140.5: L=1.158135105; M=149.0714413; S=0.049805967; break;
            case 141.5: L=1.201050821; M=149.6838943; S=0.049551023; break;
            case 142.5: L=1.239852328; M=150.2920328; S=0.049262895; break;
            case 143.5: L=1.274006058; M=150.8936469; S=0.048944504; break;
            case 144.5: L=1.303044695; M=151.4865636; S=0.048599314; break;
            case 145.5: L=1.326605954; M=152.0686985; S=0.048231224; break;
            case 146.5: L=1.344443447; M=152.6380955; S=0.047844442; break;
            case 147.5: L=1.356437773; M=153.1929631; S=0.047443362; break;
            case 148.5: L=1.362602695; M=153.7317031; S=0.04703243; break;
            case 149.5: L=1.363085725; M=154.2529332; S=0.046616026; break;
            case 150.5: L=1.358162799; M=154.755501; S=0.046198356; break;
            case 151.5: L=1.348227142; M=155.2384904; S=0.04578335; break;
            case 152.5: L=1.333772923; M=155.7012216; S=0.045374597; break;
            case 153.5: L=1.315374704; M=156.1432438; S=0.044975281; break;
            case 154.5: L=1.293664024; M=156.564323; S=0.044588148; break;
            case 155.5: L=1.269304678; M=156.9644258; S=0.044215488; break;
            case 156.5: L=1.242968236; M=157.3436995; S=0.043859135; break;
            case 157.5: L=1.21531127; M=157.7024507; S=0.04352048; break;
            case 158.5: L=1.186955477; M=158.0411233; S=0.043200497; break;
            case 159.5: L=1.158471522; M=158.3602756; S=0.042899776; break;
            case 160.5: L=1.130367088; M=158.6605588; S=0.042618565; break;
            case 161.5: L=1.103079209; M=158.9426964; S=0.042356812; break;
            case 162.5: L=1.076970655; M=159.2074654; S=0.042114211; break;
            case 163.5: L=1.052329922; M=159.455679; S=0.041890247; break;
            case 164.5: L=1.029374161; M=159.688172; S=0.04168424; break;
            case 165.5: L=1.008254396; M=159.9057871; S=0.041495379; break;
            case 166.5: L=0.989062282; M=160.1093647; S=0.041322765; break;
            case 167.5: L=0.971837799; M=160.299733; S=0.041165437; break;
            case 168.5: L=0.95657215; M=160.4776996; S=0.041022401; break;
            case 169.5: L=0.94324228; M=160.6440526; S=0.040892651; break;
            case 170.5: L=0.931767062; M=160.7995428; S=0.040775193; break;
            case 171.5: L=0.922058291; M=160.9448916; S=0.040669052; break;
            case 172.5: L=0.914012643; M=161.0807857; S=0.040573288; break;
            case 173.5: L=0.907516917; M=161.2078755; S=0.040487005; break;
            case 174.5: L=0.902452436; M=161.3267744; S=0.040409354; break;
            case 175.5: L=0.898698641; M=161.4380593; S=0.040339537; break;
            case 176.5: L=0.896143482; M=161.5422726; S=0.040276811; break;
            case 177.5: L=0.894659668; M=161.639917; S=0.040220488; break;
            case 178.5: L=0.89413892; M=161.7314645; S=0.040169932; break;
            case 179.5: L=0.894475371; M=161.8173534; S=0.040124562; break;
            case 180.5: L=0.895569834; M=161.8979913; S=0.040083845; break;
            case 181.5: L=0.897330209; M=161.9737558; S=0.040047295; break;
            case 182.5: L=0.899671635; M=162.0449969; S=0.040014473; break;
            case 183.5: L=0.902516442; M=162.1120386; S=0.03998498; break;
            case 184.5: L=0.905793969; M=162.17518; S=0.039958458; break;
            case 185.5: L=0.909440266; M=162.2346979; S=0.039934584; break;
            case 186.5: L=0.913397733; M=162.2908474; S=0.039913066; break;
            case 187.5: L=0.91761471; M=162.343864; S=0.039893644; break;
            case 188.5: L=0.922045055; M=162.3939652; S=0.039876087; break;
            case 189.5: L=0.926647697; M=162.4413513; S=0.039860185; break;
            case 190.5: L=0.931386217; M=162.4862071; S=0.039845754; break;
            case 191.5: L=0.93622842; M=162.5287029; S=0.039832629; break;
            case 192.5: L=0.941145943; M=162.5689958; S=0.039820663; break;
            case 193.5: L=0.94611388; M=162.6072309; S=0.039809725; break;
            case 194.5: L=0.95111043; M=162.6435418; S=0.0397997; break;
            case 195.5: L=0.956116576; M=162.6780519; S=0.039790485; break;
            case 196.5: L=0.961115792; M=162.7108751; S=0.039781991; break;
            case 197.5: L=0.966093766; M=162.7421168; S=0.039774136; break;
            case 198.5: L=0.971038162; M=162.7718741; S=0.03976685; break;
            case 199.5: L=0.975938391; M=162.8002371; S=0.03976007; break;
            case 200.5: L=0.980785418; M=162.8272889; S=0.039753741; break;
            case 201.5: L=0.985571579; M=162.8531067; S=0.039747815; break;
            case 202.5: L=0.99029042; M=162.8777619; S=0.039742249; break;
            case 203.5: L=0.994936555; M=162.9013208; S=0.039737004; break;
            case 204.5: L=0.999505539; M=162.9238449; S=0.039732048; break;
            case 205.5: L=1.003993753; M=162.9453912; S=0.039727352; break;
            case 206.5: L=1.0083983; M=162.9660131; S=0.03972289; break;
            case 207.5: L=1.012716921; M=162.9857599; S=0.03971864; break;
            case 208.5: L=1.016947912; M=163.0046776; S=0.039714581; break;
            case 209.5: L=1.021090055; M=163.0228094; S=0.039710697; break;
            case 210.5: L=1.025142554; M=163.0401953; S=0.039706971; break;
            case 211.5: L=1.029104983; M=163.0568727; S=0.039703391; break;
            case 212.5: L=1.032977233; M=163.0728768; S=0.039699945; break;
            case 213.5: L=1.036759475; M=163.0882404; S=0.039696623; break;
            case 214.5: L=1.040452117; M=163.1029943; S=0.039693415; break;
            case 215.5: L=1.044055774; M=163.1171673; S=0.039690313; break;
            case 216.5: L=1.047571238; M=163.1307866; S=0.039687311; break;
            case 217.5: L=1.050999451; M=163.1438776; S=0.039684402; break;
            case 218.5: L=1.054341482; M=163.1564644; S=0.039681581; break;
            case 219.5: L=1.057598512; M=163.1685697; S=0.039678842; break;
            case 220.5: L=1.060771808; M=163.1802146; S=0.039676182; break;
            case 221.5: L=1.063862715; M=163.1914194; S=0.039673596; break;
            case 222.5: L=1.066872639; M=163.202203; S=0.039671082; break;
            case 223.5: L=1.069803036; M=163.2125835; S=0.039668635; break;
            case 224.5: L=1.072655401; M=163.2225779; S=0.039666254; break;
            case 225.5: L=1.075431258; M=163.2322024; S=0.039663936; break;
            case 226.5: L=1.078132156; M=163.2414722; S=0.039661679; break;
            case 227.5: L=1.080759655; M=163.2504019; S=0.039659481; break;
            case 228.5: L=1.083315329; M=163.2590052; S=0.039657339; break;
            case 229.5: L=1.085800751; M=163.2672954; S=0.039655252; break;
            case 230.5: L=1.088217496; M=163.2752848; S=0.039653218; break;
            case 231.5: L=1.090567133; M=163.2829854; S=0.039651237; break;
            case 232.5: L=1.092851222; M=163.2904086; S=0.039649306; break;
            case 233.5: L=1.095071313; M=163.297565; S=0.039647424; break;
            case 234.5: L=1.097228939; M=163.304465; S=0.039645591; break;
            case 235.5: L=1.099325619; M=163.3111185; S=0.039643804; break;
            case 236.5: L=1.101362852; M=163.3175349; S=0.039642063; break;
            case 237.5: L=1.103342119; M=163.3237231; S=0.039640367; break;
            case 238.5: L=1.105264876; M=163.3296918; S=0.039638715; break;
            case 239.5: L=1.107132561; M=163.3354491; S=0.039637105; break;
            case 240: L=1.108046193; M=163.338251; S=0.039636316; break;
        }
    }
}

function PAS_variabili(){
    Z_inv_99=2.326347874;
    if (sesso=="m") {
        PAS_alfa=102.19768;
        PAS_beta1=1.82416;
        PAS_beta2=0.12776;
        PAS_beta3=0.00249;
        PAS_beta4=-0.00135;
        PAS_gamma1=2.73157;
        PAS_gamma2=-0.19618;
        PAS_gamma3=-0.04659;
        PAS_gamma4=0.00947;
        PAS_sigma=10.71280;
    } else {
        PAS_alfa=102.01027;
        PAS_beta1=1.94397;
        PAS_beta2=0.00598;
        PAS_beta3=-0.00789;
        PAS_beta4=-0.00059;
        PAS_gamma1=2.03526;
        PAS_gamma2=0.02534;
        PAS_gamma3=-0.01884;
        PAS_gamma4=0.00121;
        PAS_sigma=10.48550;
    }
}

function PAD_variabili(){
    if (sesso=="m") {
        PAD_alfa=61.01217;
        PAD_beta1=0.68314;
        PAD_beta2=-0.09835;
        PAD_beta3=0.01711;
        PAD_beta4=0.00045;
        PAD_gamma1=1.46993;
        PAD_gamma2=-0.07849;
        PAD_gamma3=-0.03144;
        PAD_gamma4=0.00967;
        PAD_sigma=11.60320;
    } else {
        PAD_alfa=60.50510;
        PAD_beta1=1.01301;
        PAD_beta2=0.01157;
        PAD_beta3=0.00424;
        PAD_beta4=-0.00137;
        PAD_gamma1=1.16641;
        PAD_gamma2=0.12795;
        PAD_gamma3=-0.03869;
        PAD_gamma4=-0.00079;
        PAD_sigma=10.95730;
    }
}

function calc_percentile(Z) {
    with (Math) {
        Prob=normalcdf(Z);
        Prob=round(100000*Prob)/100000;
    }
    return Prob
}

function normalcdf(X){
    var T=1/(1+.2316419*Math.abs(X));
    var D=.3989423*Math.exp(-X*X/2);
    var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
    if (X>0) {
        Prob=1-Prob;
    }
    return Prob
}

