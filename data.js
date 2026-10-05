// Comprehensive tourism data for Andong-si, Gyeongsangbuk-do, South Korea
const ANDONG_DATA = {
  destinations: [
    {
      id: "hahoe",
      category: "heritage",
      category_ko: "세계유산",
      name_en: "Hahoe Folk Village",
      name_ko: "안동 하회마을",
      tagline_en: "UNESCO World Heritage - 600-year-old living clan village",
      tagline_ko: "유네스코 세계유산 - 600년 역사가 살아 숨 쉬는 풍산 류씨 집성촌",
      desc_en: "Encircled by the S-shaped Nakdong River, Hahoe Village is home to descendants of the Ryu clan of Pungsan. Traditional Joseon-era tile-roofed noble houses and thatched cottages stand preserved in their authentic living state.",
      desc_ko: "낙동강이 S자 모양으로 마을을 감싸 안고 흐르는 유네스코 세계유산. 풍산 류씨의 600년 집성촌으로, 기와집과 초가가 조화를 이루며 지금도 실제 주민들이 거주하고 있습니다.",
      highlights_en: [
        "Hahoe Mask Dance Performance (Talchum) - Wednesday to Sunday 14:00",
        "Over 450-year-old Samgeondang zelkova tree at the village center",
        "Panoramic view from across the river at Buyongdae Cliff"
      ],
      highlights_ko: [
        "하회별신굿탈놀이 상설공연 - 수~일요일 14:00 (무료 관람)",
        "마을 중심 450년 넘은 삼신당 느티나무와 소원지 걸기",
        "나룻배를 타고 건너가 마주하는 부용대 절벽 절경"
      ],
      transport_en: "Take Bus 210 from Andong Station or Downtown (approx. 45-50 mins).",
      transport_ko: "안동역 또는 시내 교보생명 앞에서 210번 버스 탑승 (약 45~50분 소요).",
      taxi_phrase: "안동 하회마을 매표소로 가주세요.",
      taxi_roman: "Andong Hahoe-maeul maepyoso-ro gajuseyo.",
      address_en: "40, Hahoenambon-gil, Pungcheon-myeon, Andong-si",
      address_ko: "경북 안동시 풍천면 하회남촌길 40",
      operating_hours_en: "Summer 09:00 - 18:00 / Winter 09:00 - 17:00",
      operating_hours_ko: "하절기 09:00 - 18:00 / 동절기 09:00 - 17:00",
      fee_en: "Adult 5,000 KRW / Teen 2,500 KRW / Child 1,500 KRW",
      fee_ko: "어른 5,000원 / 청소년 2,500원 / 어린이 1,500원",
      lat: 36.5389,
      lng: 128.5186,
      tags: ["UNESCO", "Living Village", "Folk Culture", "Must-Visit"],
      color: "#c25e36",
      badge_en: "Must Visit #1",
      badge_ko: "필수 명소 1위"
    },
    {
      id: "buyongdae",
      category: "photo",
      category_ko: "포토존",
      name_en: "Buyongdae Cliff",
      name_ko: "부용대",
      tagline_en: "64-meter cliff offering the definitive bird's-eye view of Hahoe",
      tagline_ko: "하회마을을 한눈에 굽어보는 64m 높이의 웅장한 기암절벽",
      desc_en: "Standing 64 meters tall at the northern tip of the Taebaek Mountain Range, this sheer cliff gazes down upon the entire Hahoe Village. The name Buyongdae means 'Lotus Terrace', referencing how the village resembles a floating lotus blossom.",
      desc_ko: "태백산맥의 맨 끝자락에 위치한 64m 높이의 절벽. 정상에 서면 연꽃이 물에 뜬 형상을 한 하회마을의 전경을 한눈에 내려다볼 수 있는 최고의 전망 명소입니다.",
      highlights_en: [
        "Traditional wooden ferry boat crossing Nakdong River (seasonal)",
        "Sunset and golden-hour photography spot",
        "Ogyeonjeongsa and Hwacheon Seowon nearby"
      ],
      highlights_ko: [
        "낙동강을 건너는 전통 나룻배 체험 (수량/기상에 따라 운항)",
        "노을 질 무렵 하회마을을 황금빛으로 물들이는 인생샷 포인트",
        "절벽 아래 고즈넉한 옥연정사와 화천서원 둘러보기"
      ],
      transport_en: "Access via traditional wooden boat from Hahoe sand beach or 10 min drive around to Hwacheon Seowon parking.",
      transport_ko: "하회마을 백사장에서 나룻배를 타거나, 화천서원 주차장 방면으로 차량 10분 이동.",
      taxi_phrase: "부용대(화천서원 주차장)로 가주세요.",
      taxi_roman: "Buyongdae (Hwacheon-seowon juchajang)-ro gajuseyo.",
      address_en: "San 88, Gwangdeok-ri, Pungcheon-myeon, Andong-si",
      address_ko: "경북 안동시 풍천면 광덕리 산 88",
      operating_hours_en: "Open 24 hours (Daylight visits strongly recommended)",
      operating_hours_ko: "상시 개방 (일몰 전 주간 방문 강력 추천)",
      fee_en: "Free (Ferry boat: ~5,000 KRW round-trip)",
      fee_ko: "무료 (나룻배 이용 시 왕복 약 5,000원)",
      lat: 36.5435,
      lng: 128.5182,
      tags: ["Scenic View", "Photo Spot", "River Cruise", "Cliff"],
      color: "#2a7b88",
      badge_en: "Top Photo Spot",
      badge_ko: "최고의 포토스팟"
    },
    {
      id: "wolyeonggyo",
      category: "night",
      category_ko: "야경/낭만",
      name_en: "Wolyeonggyo Bridge",
      name_ko: "월영교",
      tagline_en: "Korea's longest wooden pedestrian bridge & romantic illuminated moon boats",
      tagline_ko: "국내 최장 목책 인도교와 호수를 밝히는 낭만 문보트",
      desc_en: "Spanning 387 meters across the Nakdong River, this wooden bridge commemorates a noble 16th-century love story discovered in an Andong tomb (Mituri hemp shoes woven from a wife's hair for her dying husband). Spectacular fountains and night illuminations light up the evening.",
      desc_ko: "길이 387m의 국내 최장 목책 인도교. 조선시대 원이 엄마의 숭고한 사랑 이야기를 품은 다리로, 밤이 되면 은은한 조명과 분수, 호수를 수놓는 문보트(달빛 배)가 환상적인 야경을 선사합니다.",
      highlights_en: [
        "Moon Boat (LED illuminated pedal/electric boat) ride at night",
        "Music Fountain shows (Seasonal weekends: 12:30, 18:30, 20:30)",
        "Scenic lakeside walking trail & Andong Dam Cultural Complex"
      ],
      highlights_ko: [
        "달 모양의 컬러풀한 LED 전동 문보트 체험",
        "계절별 주말 음악 분수 가동 (12:30, 18:30, 20:30)",
        "안동댐 호반나들이길 산책로와 민속촌 연계 관광"
      ],
      transport_en: "Bus 112 from Downtown / Andong Station or 7 min taxi ride (~6,000 KRW).",
      transport_ko: "시내 및 안동역에서 112번 버스 또는 택시 7분 소요 (요금 약 6,000원).",
      taxi_phrase: "월영교 주차장으로 가주세요.",
      taxi_roman: "Wolyeonggyo juchajang-ro gajuseyo.",
      address_en: "San 221-1, Sanga-dong, Andong-si",
      address_ko: "경북 안동시 상아동 산 221-1",
      operating_hours_en: "Open 24/7 (Night illumination runs until 23:00)",
      operating_hours_ko: "상시 개방 (야간 경관조명 23:00까지 점등)",
      fee_en: "Free admission (Moon boat: ~28,000 KRW per boat up to 3 persons)",
      fee_ko: "입장료 무료 (문보트 탑승료: 1대 3인승 약 28,000원)",
      lat: 36.5768,
      lng: 128.7617,
      tags: ["Night View", "Romantic", "Moon Boat", "Walking Trail"],
      color: "#5b4db8",
      badge_en: "Best Night View",
      badge_ko: "최고의 야경"
    },
    {
      id: "byeongsan",
      category: "heritage",
      category_ko: "세계유산",
      name_en: "Byeongsan Seowon",
      name_ko: "병산서원",
      tagline_en: "UNESCO Neo-Confucian Academy celebrated for sublime architectural harmony",
      tagline_ko: "자연과 건축이 혼연일체를 이루는 한국 서원 건축의 백미",
      desc_en: "Widely regarded as the pinnacle of Joseon Confucian architecture, Byeongsan Seowon integrates seamlessly with the surrounding Nakdong River and folding screen-like cliffs. Sitting in Mandaeru Pavilion feels like gazing into an expansive landscape painting.",
      desc_ko: "한국 서원 건축의 백미로 꼽히는 유네스코 세계유산. 만대루 누각 아래에서 바라보는 낙동강과 병풍처럼 둘러선 기암절벽의 경관은 한 폭의 진경산수화를 보는 듯 감탄을 자아냅니다.",
      highlights_en: [
        "Mandaeru Pavilion: 7-bay open architecture framing river scenery",
        "Centuries-old crape myrtle (Baekilhong) trees blossoming vibrant pink (Jul-Aug)",
        "Quiet, contemplative atmosphere away from large crowds"
      ],
      highlights_ko: [
        "만대루: 낙동강과 기암절벽을 자연 병풍 삼은 7칸 열린 누각",
        "여름철(7~8월) 서원을 붉게 물들이는 수백 년 된 배롱나무(백일홍)",
        "고즈넉하고 평화로운 분위기 속의 선비 사색 공간"
      ],
      transport_en: "Bus 210 (several departures daily directly extend to Byeongsan) or 10 min taxi from Hahoe Village.",
      transport_ko: "210번 버스 중 병산서원 경유 노선 이용 또는 하회마을에서 택시 10분.",
      taxi_phrase: "병산서원으로 가주세요.",
      taxi_roman: "Byeongsan-seowon-euro gajuseyo.",
      address_en: "386, Byeongsan-gil, Pungcheon-myeon, Andong-si",
      address_ko: "경북 안동시 풍천면 병산길 386",
      operating_hours_en: "Summer 09:00 - 18:00 / Winter 09:00 - 17:00",
      operating_hours_ko: "하절기 09:00 - 18:00 / 동절기 09:00 - 17:00",
      fee_en: "Free Admission",
      fee_ko: "무료 입장",
      lat: 36.5401,
      lng: 128.5529,
      tags: ["UNESCO", "Confucian Academy", "Architecture", "Nature"],
      color: "#8c6b3e",
      badge_en: "Architectural Jewel",
      badge_ko: "건축의 정수"
    },
    {
      id: "dosan",
      category: "heritage",
      category_ko: "세계유산",
      name_en: "Dosan Seowon",
      name_ko: "도산서원",
      tagline_en: "UNESCO Academy founded by Toegye Yi Hwang, premier philosopher of Joseon",
      tagline_ko: "퇴계 이황 선생의 학문과 덕행이 깃든 영남 유학의 총본산",
      desc_en: "Founded in 1574 to honor Toegye Yi Hwang (featured on Korea's 1,000 KRW banknote), Dosan Seowon nestled among pine-covered hills by Lake Andong was the epicenter of Neo-Confucian scholarly thought in Korea.",
      desc_ko: "퇴계 이황(1,000원권 지폐 인물) 선생의 학문과 덕행을 기리기 위해 세워진 유네스코 세계유산. 안동호가 내려다보이는 수려한 자연 속에 서원 건물들이 층층이 단아하게 자리잡고 있습니다.",
      highlights_en: [
        "Dosan Seodang: The personal study room designed by Toegye himself",
        "Sisadan: Historical examination island monument rising in the lake",
        "Ancient zelkova and pine-shaded lakeside walking trails"
      ],
      highlights_ko: [
        "도산서당: 퇴계 선생이 직접 설계하고 거처하며 제자를 가르치던 소박한 공간",
        "시사단: 안동호 호수 위에 섬처럼 솟은 과거시험 기념 제단",
        "수백 년 고목과 안동호 물안개가 어우러진 산책길"
      ],
      transport_en: "Bus 567 or 512 from Andong Downtown (approx. 40-50 mins) or 30 min taxi.",
      transport_ko: "안동 시내에서 567번 또는 512번 버스 (약 45분) 또는 택시 30분 소요.",
      taxi_phrase: "도산서원 매표소로 가주세요.",
      taxi_roman: "Dosan-seowon maepyoso-ro gajuseyo.",
      address_en: "211, Dosanseowon-gil, Dosan-myeon, Andong-si",
      address_ko: "경북 안동시 도산면 도산서원길 211",
      operating_hours_en: "09:00 - 18:00 (Nov-Feb: 09:00 - 17:00)",
      operating_hours_ko: "09:00 - 18:00 (동절기 11~2월: 09:00 - 17:00)",
      fee_en: "Adult 2,000 KRW / Teen 1,000 KRW / Child 600 KRW",
      fee_ko: "어른 2,000원 / 청소년 1,000원 / 어린이 600원",
      lat: 36.7215,
      lng: 128.8475,
      tags: ["UNESCO", "History", "Scholarship", "Lake View"],
      color: "#466347",
      badge_en: "Historic Sanctuary",
      badge_ko: "선비정신의 요람"
    },
    {
      id: "manhyujeong",
      category: "photo",
      category_ko: "포토존",
      name_en: "Manhyujeong Pavilion",
      name_ko: "만휴정",
      tagline_en: "Iconic single-log bridge nestled over a cascading forest waterfall",
      tagline_ko: "드라마 '미스터 션샤인'의 명장면, 깊은 숲속 폭포 위 외나무다리",
      desc_en: "Famed globally as a key filming location for the hit drama 'Mr. Sunshine' (the famous confession scene: 'Love is harder than guns'). The single wooden trunk bridge over a crystal-clear stream with rock pools makes for unforgettable photography.",
      desc_ko: "드라마 '미스터 션샤인'의 '합시다, 러브' 명장면 촬영지로 널리 알려진 곳. 울창한 숲과 암반 폭포 계곡을 가로지르는 외나무다리 위에서 인생 사진을 남길 수 있습니다.",
      highlights_en: [
        "Cross the famous single-log wooden bridge over Songam Waterfall",
        "Peaceful secluded valley scenery surrounded by pine groves",
        "Memorial pavilion built in 1500 by Joseon civil minister Kim Gye-haeng"
      ],
      highlights_ko: [
        "송암폭포 계곡을 가로지르는 포토존 외나무다리 건너기",
        "송림과 암반 계곡이 어우러진 청량하고 호젓한 숲길",
        "조선 연산군 시절 청백리 보백당 김계행 선생의 유서 깊은 정자"
      ],
      transport_en: "Located in Gilan-myeon. Best reached by taxi or rental car (approx. 30 mins from Andong Station).",
      transport_ko: "길안면 위치. 안동역에서 렌터카 또는 택시 이동 추천 (약 30분 소요).",
      taxi_phrase: "길안면 만휴정 주차장으로 가주세요.",
      taxi_roman: "Gilan-myeon Manhyujeong juchajang-ro gajuseyo.",
      address_en: "42, Mukgyeha-gil, Gilan-myeon, Andong-si",
      address_ko: "경북 안동시 길안면 묵계하길 42",
      operating_hours_en: "09:30 - 17:30 daily",
      operating_hours_ko: "09:30 - 17:30 매일 운영",
      fee_en: "Adult 1,500 KRW (includes clean eco-bag token)",
      fee_ko: "입장료 1,500원 (종량제 쓰레기봉투 지급)",
      lat: 36.4358,
      lng: 128.9189,
      tags: ["Mr. Sunshine", "Photo Spot", "Waterfall", "Forest"],
      color: "#1d6f54",
      badge_en: "K-Drama Landmark",
      badge_ko: "K-드라마 명소"
    },
    {
      id: "oldmarket",
      category: "food",
      category_ko: "전통시장",
      name_en: "Andong Old Market (Gu-Sijang) & Jjimdak Alley",
      name_ko: "안동 구시장 찜닭골목",
      tagline_en: "The buzzing birth ground of world-famous Andong Braised Chicken",
      tagline_ko: "매콤달콤 화려한 웍 소리가 가득한 원조 안동찜닭의 발상지",
      desc_en: "A vibrant traditional market boasting over 30 dedicated Jjimdak restaurants lined side-by-side. Witness massive woks sizzling with braised chicken, glass noodles, carrots, potatoes, and sweet-savory soy sauce broth.",
      desc_ko: "안동 대표 별미 안동찜닭이 탄생한 골목. 30여 개 찜닭 전문점이 늘어서 있으며, 센 불에서 화려하게 닭과 채소, 당면을 볶아내는 활기찬 시장 풍경을 만끽할 수 있습니다.",
      highlights_en: [
        "Choose spicy level: 'Sunhan-mat' (mild) or 'Botong-mat' (standard spicy)",
        "One platter easily serves 3-4 hungry travelers",
        "Traditional market snacks: tteokbokki, hotteok, and seasonal fresh fruits"
      ],
      highlights_ko: [
        "맵기 선택 팁: 순한맛(덜 맵게) 또는 보통맛(칼칼한 맛)",
        "푸짐한 중(中)자 한 접시로 3~4인이 든든하게 식사 가능",
        "떡볶이, 씨앗호떡, 제철 과일 등 정겨운 전통시장 길거리 음식"
      ],
      transport_en: "Located right in downtown Andong. 5 minutes walk from Woongbu Park or 15 mins by bus from KTX Andong Station.",
      transport_ko: "안동 구도심 중심가 위치. 웅부공원에서 도보 5분, KTX 안동역에서 시내버스 15분.",
      taxi_phrase: "안동 구시장 찜닭골목 입구로 가주세요.",
      taxi_roman: "Andong Gu-sijang Jjimdak-golmok ipgu-ro gajuseyo.",
      address_en: "184-4, Beonyeong-gil, Andong-si",
      address_ko: "경북 안동시 번영길 184-4 안동구시장",
      operating_hours_en: "10:00 - 22:00 (Varies by restaurant)",
      operating_hours_ko: "10:00 - 22:00 (식당별 상이)",
      fee_en: "Jjimdak medium platter: approx. 32,000 - 35,000 KRW",
      fee_ko: "안동찜닭(중): 약 32,000 ~ 35,000원",
      lat: 36.5654,
      lng: 128.7303,
      tags: ["Local Food", "Traditional Market", "Street Food", "Jjimdak"],
      color: "#b03a2e",
      badge_en: "Foodie Haven",
      badge_ko: "미식의 성지"
    },
    {
      id: "soju_museum",
      category: "food",
      category_ko: "전통주",
      name_en: "Andong Soju Museum & Traditional Distillery",
      name_ko: "안동소주 박물관 & 전통 양조장",
      tagline_en: "700-year distilling legacy of Korea's premier 45% ABV traditional spirit",
      tagline_ko: "700년 역사를 품은 한국 최고의 45도 전통 증류식 소주",
      desc_en: "Inherited from Mongol Yuan dynasty distillation techniques in the 13th century, Andong Soju is distilled purely from clean water, malted wheat (Nuruk), and rice. Experience the brewing heritage and sample authentic artisanal varieties.",
      desc_ko: "13세기 고려 후기 몽골로부터 전래된 이래 700년 역사를 이어온 안동 전통 증류주 박물관. 쌀과 누룩, 맑은 물로 빚어낸 45도 안동소주의 제조 과정과 역사 유물을 견학할 수 있습니다.",
      highlights_en: [
        "Free tasting of authentic master-distilled Andong Soju",
        "Exhibition of Joseon-era feast dining tables and ceramic vessels",
        "Purchase premium soju in ceramic bottles as high-value souvenirs"
      ],
      highlights_ko: [
        "명인의 손길이 깃든 전통 안동소주 무료 시음",
        "조선시대 반가 접빈 주안상 및 전통 주기 도자기 전시",
        "선물용 고급 도자기병 안동소주 현장 구매 가능"
      ],
      transport_en: "Bus 110 or 10 min taxi from downtown Andong.",
      transport_ko: "시내에서 110번 버스 또는 택시로 약 10분 소요.",
      taxi_phrase: "안동소주 박물관으로 가주세요.",
      taxi_roman: "Andong Soju bangmulgwan-euro gajuseyo.",
      address_en: "90, Gangnam-ro, Pungcheon-myeon, Andong-si",
      address_ko: "경북 안동시 강남로 90",
      operating_hours_en: "09:00 - 17:00 (Closed Sundays & major holidays)",
      operating_hours_ko: "09:00 - 17:00 (일요일 및 명절 휴관)",
      fee_en: "Free admission",
      fee_ko: "무료 관람",
      lat: 36.5541,
      lng: 128.7389,
      tags: ["Traditional Alcohol", "Tasting", "Souvenirs", "Museum"],
      color: "#6c3483",
      badge_en: "Craft Heritage",
      badge_ko: "장인의 명품"
    },
    {
      id: "imcheonggak",
      category: "heritage",
      category_ko: "고택역사",
      name_en: "Imcheonggak Historic House",
      name_ko: "임청각",
      tagline_en: "Birthplace of 9 independence fighters & 500-year aristocratic residences",
      tagline_ko: "독립운동가 9명을 배출한 500년 보물 고택과 임시정부 초대 국무령 생가",
      desc_en: "Imcheonggak is Korea's oldest civilian wooden residence, boasting 99 kan (bays). It is deeply revered as the ancestral home of Seokju Yi Sang-ryong, prime minister of Korea's Provisional Government, who gave up wealth to fight Japanese colonial rule.",
      desc_ko: "보물로 지정된 500년 고택이자 대한민국 임시정부 초대 국무령 석주 이상룡 선생의 생가. 한 가문에서 무려 9명의 독립운동가를 배출한 숭고한 역사의 현장입니다.",
      highlights_en: [
        "Historical memorial hall explaining Korea's patriotic resistance",
        "Traditional Hanok stay experience available on site",
        "Beautiful view overlooking the railway restoration park and river"
      ],
      highlights_ko: [
        "석주 이상룡 선생과 독립운동 테마 기념 전시관",
        "유서 깊은 99칸 종택 한옥스테이 체험 (사전 예약)",
        "철길 복원 역사공원과 낙동강을 조망하는 고즈넉한 정원"
      ],
      transport_en: "5 minutes walk toward Wolyeonggyo direction from downtown.",
      transport_ko: "안동 도심에서 월영교 방향으로 도보 15분 또는 택시 5분.",
      taxi_phrase: "임청각으로 가주세요.",
      taxi_roman: "Imcheonggak-euro gajuseyo.",
      address_en: "63, Imcheonggak-gil, Andong-si",
      address_ko: "경북 안동시 임청각길 63",
      operating_hours_en: "09:00 - 18:00 daily",
      operating_hours_ko: "09:00 - 18:00 매일 개방",
      fee_en: "Free admission",
      fee_ko: "무료 입장",
      lat: 36.5687,
      lng: 128.7441,
      tags: ["Patriotism", "Historic Hanok", "Architecture", "Heritage"],
      color: "#7d6608",
      badge_en: "Patriotic Heritage",
      badge_ko: "구국의 혼"
    }
  ],

  cuisines: [
    {
      id: "c-jjimdak",
      name_en: "Andong Jjimdak (Braised Chicken)",
      name_ko: "안동찜닭",
      spice_level_en: "Medium (Can request mild / 안 맵게)",
      spice_level_ko: "중간 매콤 (순한맛 주문 가능)",
      desc_en: "Succulent chopped chicken braised at high heat with glass noodles, chunks of potato, carrots, and cabbage in a deep, savory garlic-soy sauce with dried red chili peppers.",
      desc_ko: "큼직하게 썬 닭고기에 감자, 당근, 양배추, 쫄깃한 납작당면을 넣고 청양고추와 특제 간장 양념으로 센 불에 졸여낸 안동의 대표 국민 요리입니다.",
      eating_tip_en: "Slurp the chewy glass noodles first before they absorb all the soup! Spoon the sweet-savory broth over steamed white rice at the end.",
      eating_tip_ko: "당면이 국물을 흡수하기 전에 당면부터 건져 드세요! 고기를 드신 후 남은 양념 국물에 흰 쌀밥을 비벼 먹는 것이 현지인 꿀팁입니다.",
      dining_card: "안동찜닭 보통맛(또는 순한맛) 하나 주세요. 덜 맵게 해주실 수 있나요?",
      dining_card_roman: "Andong jjimdak botong-mat hana juseyo. Deol maepge hae-jusil su innayo?",
      where_to_eat_en: "Andong Old Market (Gu-sijang) Jjimdak Alley",
      where_to_eat_ko: "안동 구시장 찜닭골목 (원조 식당 밀집)",
      price_range: "30,000 - 35,000 KRW"
    },
    {
      id: "c-mackerel",
      name_en: "Gan-godeungeo (Salted Mackerel)",
      name_ko: "안동 간고등어 정식",
      spice_level_en: "None (Zero Spicy)",
      spice_level_ko: "맵지 않음 (순한 담백함)",
      desc_en: "Centuries ago, fish caught off the East Coast had to travel inland on foot to Andong; salters salted the mackerel at Imdong ferry, resulting in perfectly tender, savory aged fish.",
      desc_ko: "동해안에서 잡힌 고등어가 내륙 안동까지 오며 적절한 염간(간재비 손길)을 거쳐 깊은 감칠맛을 내는 전통 생선구이 정식입니다.",
      eating_tip_en: "Grilled with crispy golden skin and moist flaky flesh. Wrap a piece of fish meat with steamed rice in a toasted laver sheet or fresh lettuce.",
      eating_tip_ko: "노릇노릇 바삭하게 구워진 껍질과 촉촉한 속살을 밥 위에 얹고, 상추쌈이나 김에 싸서 된장찌개와 함께 드시면 꿀맛입니다.",
      dining_card: "간고등어 구이 정식 주세요. (맵지 않은 음식)",
      dining_card_roman: "Gan-godeungeo gui jeongsik juseyo.",
      where_to_eat_en: "Iljik Sikdang (near Andong Station) or restaurants along Wolyeonggyo",
      where_to_eat_ko: "일직식당(구 안동역 부근) 및 월영교 주변 식당가",
      price_range: "13,000 - 15,000 KRW"
    },
    {
      id: "c-heotjesa",
      name_en: "Heotjesabap (Mock Memorial Meal)",
      name_ko: "헛제사밥",
      spice_level_en: "None (Seasoned with Soy Sauce)",
      spice_level_ko: "맵지 않음 (고추장 대신 간장 양념)",
      desc_en: "Because Confucian scholars loved ritual foods but couldn't hold feasts without reason, they prepared this 'mock ancestral ceremony feast'. A gentle bibimbap served with seasoned wild greens, beef, tofu, sanjeok skewers, and soy sauce dressing.",
      desc_ko: "제사를 지내지 않고도 제사 음식의 풍미를 즐기기 위해 유생들이 밤참으로 만들어 먹던 전통 비빔밥. 맵지 않은 진간장으로 비벼 담백하고 속이 편안합니다.",
      eating_tip_en: "Unlike regular red bibimbap, you mix this with aged Joseon soy sauce instead of spicy red pepper paste. Gentle on the stomach.",
      eating_tip_ko: "고추장 대신 맛간장을 조금씩 넣어가며 나물 본연의 향긋한 맛을 음미해 보세요. 함께 나오는 탕국과 돔배기(상어고기) 산적도 별미입니다.",
      dining_card: "헛제사밥 정식 부탁드립니다.",
      dining_card_roman: "Heotjesabap jeongsik butakdeurimnida.",
      where_to_eat_en: "Mat50-nyeon Heotjesabap (near Wolyeonggyo entrance)",
      where_to_eat_ko: "맛50년헛제사밥 (월영교 입구 맞은편)",
      price_range: "13,000 - 20,000 KRW"
    },
    {
      id: "c-mammoth",
      name_en: "Mammoth Bakery Cream Cheese Bread",
      name_ko: "맘모스베이커리 크림치즈빵",
      spice_level_en: "Sweet & Savory",
      spice_level_ko: "달콤 & 짭조름",
      desc_en: "Featured in Michelin Green Guide Korea! Established in 1968, this historic bakery is renowned nationwide for its chewy, pillow-soft bun overflowing with rich, tangy cream cheese.",
      desc_ko: "미슐랭 그린가이드 한국편에 등재된 1968년 창업 전국 3대 빵집. 쫄깃한 하얀 빵 속에 진하고 상큼한 크림치즈가 듬뿍 들어있습니다.",
      eating_tip_en: "Enjoy fresh immediately while warm. Pair with their iced Americano or citron tea. Expect queues on weekend afternoons.",
      eating_tip_ko: "구입 즉시 따뜻할 때 바로 드셔보세요. 시원한 아메리카노와 찰떡궁합입니다. 주말에는 조기 품절될 수 있습니다.",
      dining_card: "크림치즈빵 포장해주세요.",
      dining_card_roman: "Cream-cheese ppang pojang hae-juseyo.",
      where_to_eat_en: "Mammoth Bakery Downtown Main Branch (Cultural Street)",
      where_to_eat_ko: "맘모스베이커리 본점 (안동 문화의거리)",
      price_range: "2,500 KRW per bread"
    },
    {
      id: "c-soju",
      name_en: "Traditional Andong Soju",
      name_ko: "안동소주 (전통 증류주)",
      spice_level_en: "Alcohol (22% to 45% ABV)",
      spice_level_ko: "전통주 (알코올 도수 22~45도)",
      desc_en: "Crystal clear distilled spirit made from pure fermented rice and wheat malt (Nuruk). It has a distinct floral grain aroma, velvety texture, and surprisingly crisp, clean finish.",
      desc_ko: "100% 쌀과 전통 누룩, 맑은 물로 빚어 증류한 한국의 명품 증류식 소주. 은은한 곡물향과 그윽한 풍미, 숙취가 없는 깔끔함이 일품입니다.",
      eating_tip_en: "Sip slowly at room temperature or on the rocks. Pairs heavenly with grilled beef, salted mackerel, or dried persimmon.",
      eating_tip_ko: "온더락으로 얼음을 띄워 드시거나, 상온에서 작은 전용 잔에 따라 천천히 향을 음미하며 드세요. 간고등어나 소고기와 환상 궁합입니다.",
      dining_card: "선물용 안동소주 추천해주세요.",
      dining_card_roman: "Seonmul-yong Andong soju chucheon hae-juseyo.",
      where_to_eat_en: "Traditional markets, soju museums, or local craft bottle shops",
      where_to_eat_ko: "안동 구시장, 양조장 직판장, 안동소주 박물관",
      price_range: "8,000 - 35,000 KRW"
    }
  ],

  itineraries: [
    {
      id: "day1_classic",
      title_en: "The Essential 1-Day Heritage Trail",
      title_ko: "안동 필수 핵심 1일 코스 (유네스코 & 낭만 야경)",
      duration_en: "1 Full Day (~8-9 Hours)",
      duration_ko: "당일치기 (~8-9시간 소요)",
      pace_en: "Moderate",
      pace_ko: "알찬 일정",
      summary_en: "The definitive route for first-time visitors: UNESCO living clan village, scenic cliff vista, world-famous Jjimdak lunch, and Korea's dreamiest moonlit bridge.",
      summary_ko: "안동을 처음 찾는 분들을 위한 최고의 클래식 코스: 유네스코 하회마을, 부용대 절경, 원조 찜닭 미식, 그리고 환상적인 월영교 달빛 야경.",
      stops_en: [
        { time: "09:30", place: "Hahoe Folk Village", tip: "Stroll preserved alleyways and ancient noble mansions" },
        { time: "11:30", place: "Buyongdae Cliff", tip: "Take wooden boat or gaze from the panoramic precipice" },
        { time: "13:00", place: "Andong Old Market Jjimdak Alley", tip: "Feast on savory braised chicken platter & explore market" },
        { time: "15:00", place: "Mammoth Bakery & Cultural Street", tip: "Coffee and famous cream cheese bread treat" },
        { time: "16:30", place: "Imcheonggak Historic House", tip: "Experience 500-year wooden estate and patriotic history" },
        { time: "18:30", place: "Wolyeonggyo Bridge & Moon Boat", tip: "Watch sunset turn into glowing bridge lights and fountain" }
      ],
      stops_ko: [
        { time: "09:30", place: "안동 하회마을", tip: "삼신당 느티나무와 600년 고택 골목길 산책" },
        { time: "11:30", place: "부용대 절벽", tip: "나룻배를 건너거나 전망대에서 하회마을 전경 조망" },
        { time: "13:00", place: "안동 구시장 찜닭골목", tip: "푸짐한 원조 안동찜닭 점심 식사 & 전통시장 구경" },
        { time: "15:00", place: "맘모스베이커리 문화의거리", tip: "시그니처 크림치즈빵 디저트 & 시내 산책" },
        { time: "16:30", place: "임청각 고택", tip: "500년 보물 고택과 대한민국 임시정부 국무령 생가 관람" },
        { time: "18:30", place: "월영교 & 문보트 야경", tip: "호수를 수놓는 형형색색 야경과 LED 문보트 탑승" }
      ]
    },
    {
      id: "day2_culture",
      title_en: "2-Day Immersion: Scholar Wisdom & K-Drama Spots",
      title_ko: "안동 1박 2일 완전정복 (선비정신과 K-드라마 명소)",
      duration_en: "2 Days / 1 Night",
      duration_ko: "1박 2일",
      pace_en: "Relaxed & Immersive",
      pace_ko: "여유로운 힐링",
      summary_en: "Dive into world-class Confucian sanctuaries along tranquil lakes, experience real K-drama romantic spots, and unwind in historic surroundings.",
      summary_ko: "유네스코 서원의 고요한 품격, 드라마 '미스터 션샤인' 속 외나무다리 계곡, 그리고 안동호의 물안개를 느끼는 깊이 있는 여행.",
      stops_en: [
        { time: "Day 1", place: "Hahoe Village + Byeongsan Seowon + Wolyeonggyo", tip: "Classic highlights + lakeside dinner with Gan-godeungeo" },
        { time: "Day 2 Morning", place: "Dosan Seowon & Lake Andong", tip: "Breathe serene lake mist at Toegye's historic retreat" },
        { time: "Day 2 Afternoon", place: "Manhyujeong Pavilion", tip: "Walk the single-log bridge across the forest waterfall" },
        { time: "Day 2 Evening", place: "Andong Soju Museum & Station Departure", tip: "Pick up handcrafted souvenirs before catching KTX back to Seoul" }
      ],
      stops_ko: [
        { time: "1일차", place: "하회마을 + 병산서원 + 월영교", tip: "유네스코 명소 순회와 월영교 앞 간고등어 저녁 식사" },
        { time: "2일차 오전", place: "도산서원 & 안동호", tip: "퇴계 이황의 숨결이 깃든 호반 서원 산책" },
        { time: "2일차 오후", place: "만휴정 외나무다리", tip: "드라마 '미스터 션샤인' 촬영지 인생샷 남기기" },
        { time: "2일차 저녁", place: "안동소주 박물관 & KTX 안동역", tip: "전통주 기념품 쇼핑 후 KTX-이음 탑승 귀가" }
      ]
    },
    {
      id: "photo_route",
      title_en: "Photographer & Romantic Route",
      title_ko: "감성 인스타 & 인생샷 포토 투어",
      duration_en: "Half-Day to 1 Day",
      duration_ko: "반나절 ~ 하루 코스",
      pace_en: "Leisurely",
      pace_ko: "사진 중심",
      summary_en: "Curated specifically for picture-perfect memories, traditional costume rentals, and breathtaking natural backdrops.",
      summary_ko: "카메라 셔터만 누르면 화보가 되는 안동 최고의 인생샷 포토존만 엄선한 감성 코스.",
      stops_en: [
        { time: "10:00", place: "Manhyujeong Single-log Bridge", tip: "Morning light reflects off emerald waterfall pools" },
        { time: "13:30", place: "Byeongsan Seowon Mandaeru", tip: "Framed open pavilion photography with river backdrop" },
        { time: "16:00", place: "Buyongdae Golden Hour", tip: "Golden sunlight sweeping over the curved river village" },
        { time: "19:00", place: "Wolyeonggyo Moon Boat", tip: "Glide along the glowing lake in an illuminated moon-shaped vessel" }
      ],
      stops_ko: [
        { time: "10:00", place: "만휴정 외나무다리", tip: "아침 햇살이 비치는 에메랄드빛 계곡 폭포 위 포토샷" },
        { time: "13:30", place: "병산서원 만대루", tip: "누각 기둥 사이로 낙동강과 절벽이 액자처럼 담기는 샷" },
        { time: "16:00", place: "부용대 골든아워", tip: "석양이 하회마을을 감싸 안는 웅장한 전경 촬영" },
        { time: "19:00", place: "월영교 야간 문보트", tip: "빛나는 보트 안에서 호수와 목책교를 배경으로 한 낭만 사진" }
      ]
    }
  ],

  driver_phrases: [
    {
      category_en: "Taxi & Directions",
      category_ko: "택시 & 길찾기",
      icon: "🚕",
      title_en: "Go to Hahoe Folk Village",
      title_ko: "하회마을 매표소로 이동",
      korean_big: "안동 하회마을 매표소로 가주세요.",
      phonetic: "An-dong Ha-hoe mae-ul mae-pyo-so-ro ga-ju-se-yo.",
      desc_en: "Show this to taxi driver to go to Hahoe Ticket Office.",
      desc_ko: "택시 기사님께 하회마을 매표소로 가달라고 요청할 때 보여주세요."
    },
    {
      category_en: "Taxi & Directions",
      category_ko: "택시 & 길찾기",
      icon: "🌉",
      title_en: "Go to Wolyeonggyo Bridge",
      title_ko: "월영교 주차장으로 이동",
      korean_big: "월영교 주차장으로 가주세요.",
      phonetic: "Wol-yeong-gyo ju-cha-jang-eu-ro ga-ju-se-yo.",
      desc_en: "Show this to taxi driver to head to Wolyeonggyo Bridge.",
      desc_ko: "택시 기사님께 월영교 주차장으로 가달라고 할 때 보여주세요."
    },
    {
      category_en: "Taxi & Directions",
      category_ko: "택시 & 길찾기",
      icon: "🚄",
      title_en: "Go to KTX Andong Station",
      title_ko: "KTX 안동역으로 이동",
      korean_big: "안동역(KTX)으로 가주세요.",
      phonetic: "An-dong-yeok eu-ro ga-ju-se-yo.",
      desc_en: "Show this to taxi driver to catch your train at Andong KTX Station.",
      desc_ko: "서울/대구행 기차를 타러 안동역으로 갈 때 보여주세요."
    },
    {
      category_en: "Taxi & Directions",
      category_ko: "택시 & 길찾기",
      icon: "🍗",
      title_en: "Go to Jjimdak Alley (Old Market)",
      title_ko: "구시장 찜닭골목으로 이동",
      korean_big: "안동 구시장 찜닭골목으로 가주세요.",
      phonetic: "An-dong Gu-si-jang Jjim-dak gol-mok-eu-ro ga-ju-se-yo.",
      desc_en: "Show this to reach the famous traditional market Jjimdak street.",
      desc_ko: "원조 찜닭 골목 입구로 가달라고 할 때 보여주세요."
    },
    {
      category_en: "Dining & Ordering",
      category_ko: "식당 & 주문",
      icon: "🌶️",
      title_en: "Please make it NOT spicy",
      title_ko: "맵지 않게(순한맛) 요청",
      korean_big: "맵지 않게(안 맵게) 해주실 수 있나요?",
      phonetic: "Maep-ji an-ge hae-ju-sil su in-na-yo?",
      desc_en: "Crucial phrase when ordering Andong Jjimdak if you have low chili tolerance!",
      desc_ko: "매운 음식을 잘 못 드시는 외국인을 위한 필수 요청 표현입니다."
    },
    {
      category_en: "Dining & Ordering",
      category_ko: "식당 & 주문",
      icon: "🧾",
      title_en: "Please give me the check / bill",
      title_ko: "계산 및 영수증 요청",
      korean_big: "계산해 주세요. 영수증도 부탁드립니다.",
      phonetic: "Gye-san-hae ju-se-yo. Yeong-su-jeung-do bu-tak-deu-rim-ni-da.",
      desc_en: "Show when you are ready to pay at any restaurant or café.",
      desc_ko: "식사 후 계산대에서 직원분께 보여주는 문구입니다."
    },
    {
      category_en: "Dining & Ordering",
      category_ko: "식당 & 주문",
      icon: "🥛",
      title_en: "Can I have some water, please?",
      title_ko: "물 부탁하기",
      korean_big: "물 좀 주실 수 있나요?",
      phonetic: "Mul jom ju-sil su in-na-yo?",
      desc_en: "Asking for water in a restaurant (water is free in Korea).",
      desc_ko: "식당에서 무료 생수를 요청할 때 보여주세요."
    },
    {
      category_en: "Emergency & General",
      category_ko: "긴급 & 편의",
      icon: "🚻",
      title_en: "Where is the restroom?",
      title_ko: "화장실 위치 묻기",
      korean_big: "화장실이 어디에 있나요?",
      phonetic: "Hwa-jang-sil-i eo-di-e in-na-yo?",
      desc_en: "Universal emergency question everywhere you visit.",
      desc_ko: "어디서든 급하게 화장실 위치를 물어볼 때 유용합니다."
    },
    {
      category_en: "Emergency & General",
      category_ko: "긴급 & 편의",
      icon: "💳",
      title_en: "Do you accept foreign credit cards?",
      title_ko: "해외 카드 결제 문의",
      korean_big: "해외 신용카드 결제 되나요?",
      phonetic: "Hae-oe sin-yong-ka-deu gyeol-je doe-na-yo?",
      desc_en: "Ask if Visa/Mastercard is accepted before payment.",
      desc_ko: "비자, 마스터 등 해외 발급 신용카드 사용 가능 여부를 물을 때 쓰입니다."
    },
    {
      category_en: "Emergency & General",
      category_ko: "긴급 & 편의",
      icon: "🆘",
      title_en: "English Tourist Helpline (1330)",
      title_ko: "1330 관광통역 전화 연결",
      korean_big: "1330 관광통역안내전화 연결 부탁드립니다.",
      phonetic: "Il-sam-sam-gong gwan-gwang tong-yeok an-nae-jeon-hwa",
      desc_en: "Free 24/7 hotline in English, Japanese, and Chinese (Dial 1330 from any phone).",
      desc_ko: "소통이 어려울 때 무료 3자 관광 통역 서비스를 요청하는 문구입니다."
    }
  ],

  transit_guide: [
    {
      mode_en: "KTX-Eum Train from Seoul",
      mode_ko: "서울 청량리발 KTX-이음 고속열차",
      time_en: "~2 hours",
      time_ko: "약 2시간 소요",
      cost_en: "approx. 25,100 KRW",
      cost_ko: "편도 약 25,100원",
      summary_en: "Board KTX-Eum from Cheongnyangni Station (Seoul) directly to Andong Station. Clean, fast, free Wi-Fi, and power outlets on board. Book tickets via Korail Talk app.",
      summary_ko: "서울 청량리역에서 안동역까지 환승 없이 2시간 주파. 전 좌석 무료 와이파이와 스마트폰 무선충전기 완비. 코레일톡 앱에서 영문 예매 가능합니다."
    },
    {
      mode_en: "Bus 210 (To Hahoe Village)",
      mode_ko: "210번 시내버스 (하회마을 직행)",
      time_en: "~45 minutes",
      time_ko: "약 45분 소요",
      cost_en: "1,500 KRW (T-Money accepted)",
      cost_ko: "1,500원 (교통카드 가능)",
      summary_en: "Departs from Bus Stop across from Andong Station or Kyobo Life downtown. Directly terminates at Hahoe Village Folk Market. Some buses extend to Byeongsan Seowon.",
      summary_ko: "안동역 건너편 및 구도심 교보생명 앞에서 탑승. 하회마을 매표소 및 장터 종점까지 직행하며, 일부 배차는 병산서원까지 연장 운행합니다."
    },
    {
      mode_en: "Taxis in Andong",
      mode_ko: "안동 시내 택시 이용 팁",
      time_en: "On-demand",
      time_ko: "호출 즉시 탑승",
      cost_en: "Base fare 4,000 KRW",
      cost_ko: "기본요금 4,000원",
      summary_en: "Taxis accept international Visa/Mastercard credit cards and T-Money. Drivers rarely speak fluent English, so use our 'Show to Driver' flashcards!",
      summary_ko: "해외 신용카드 및 티머니 결제 지원. 기사님 소통이 필요할 땐 본 웹앱의 '기사님 쇼카드'를 화면 가득 보여주시면 매우 편리합니다."
    },
    {
      mode_en: "Luggage Storage",
      mode_ko: "무료 물품보관함 (코인락커)",
      time_en: "Daily",
      time_ko: "당일 이용",
      cost_en: "Free / Nominal coin lockers",
      cost_ko: "무료 또는 소액 코인",
      summary_en: "Free luggage storage lockers are available inside Andong KTX Station and at the Hahoe Village Tourist Information Center.",
      summary_ko: "안동역(KTX) 대합실 내부 및 하회마을 종합관광안내소에 캐리어를 보관할 수 있는 락커가 마련되어 있어 가벼운 여행이 가능합니다."
    }
  ],

  culture_tips: [
    {
      title_en: "Hahoe Mask Dance is Free with Village Entry",
      title_ko: "하회별신굿탈놀이 공연은 무료입니다",
      desc_en: "Every Wednesday, Friday, Saturday, and Sunday at 2:00 PM at the Hahoe Mask Dance Performance Hall. It includes English subtitles on digital screens.",
      desc_ko: "매주 수·금·토·일요일 오후 2시 하회별신굿탈놀이 전수교육관에서 무료 상설 공연이 진행됩니다. 외국인을 위한 영문 자막 스크린이 지원됩니다."
    },
    {
      title_en: "Taking Shoes Off Indoors",
      title_ko: "실내 한옥 입장 시 신발 벗기",
      desc_en: "When stepping into Hanok rooms, Seowon wooden platforms, or traditional restaurants, always remove your shoes. Clean socks are appreciated.",
      desc_ko: "서원 마루나 전통 한옥 방, 온돌식 전통 식당에 들어갈 때는 반드시 신발을 벗어야 합니다. 깔끔한 양말 착용을 권장합니다."
    },
    {
      title_en: "Emergency Numbers in Korea",
      title_ko: "대한민국 24시간 긴급 전화",
      desc_en: "Police: 112 | Fire & Medical Ambulance: 119 | 24/7 Tourist Information Helpline (English): 1330",
      desc_ko: "경찰: 112 | 119 구급·화재 | 24시간 한국관광공사 통역 헬프라인 (무료): 1330"
    }
  ]
};
