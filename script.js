// 1. 14개 구단 마스터 데이터베이스 및 전체 선수단 목록 통합형 객체
const teamDatabase = {
    // ==========================================
    // 여자부 (7개 팀) 전체 데이터
    // ==========================================
    hillstate: {
        name: "현대건설 힐스테이트", league: "women", location: "경기도 수원시", stadium: "수원실내체육관", coach: "강성형", founded: "1977년", champs: "3회", lastRank: "1위 (우승)", color: "#002f6c", logo: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=150",
        squad: [
            { no: "99", name: "모마", pos: "OP", posFull: "아포짓 스파이커", birth: "1993.10.09", height: "184cm" },
            { no: "14", name: "양효진", pos: "MB", posFull: "미들 블로커", birth: "1989.12.14", height: "190cm" },
            { no: "3", name: "김다인", pos: "S", posFull: "세터", birth: "1998.10.15", height: "172cm" },
            { no: "8", name: "김연견", pos: "L", posFull: "리베로", birth: "1993.12.01", height: "164cm" },
            { no: "17", name: "고예림", pos: "OH", posFull: "아웃사이드 히터", birth: "1994.04.01", height: "177cm" },
            { no: "12", name: "정지윤", pos: "OH", posFull: "아웃사이드 히터", birth: "2001.01.01", height: "180cm" },
            { no: "4", name: "황연주", pos: "OP", posFull: "아포짓 스파이커", birth: "1986.08.13", height: "177cm" },
            { no: "13", name: "정시영", pos: "MB", posFull: "미들 블로커", birth: "1993.03.12", height: "180cm" },
            { no: "6", name: "나현수", pos: "MB", posFull: "미들 블로커", birth: "1999.09.15", height: "184cm" },
            { no: "11", name: "김사랑", pos: "S", posFull: "세터", birth: "2004.11.12", height: "173cm" },
            { no: "15", name: "최서현", pos: "S", posFull: "세터", birth: "2005.02.03", height: "174cm" },
            { no: "5", name: "이영주", pos: "L", posFull: "리베로", birth: "2002.03.09", height: "161cm" },
            { no: "16", name: "최호선", pos: "OH", posFull: "아웃사이드 히터", birth: "2005.12.21", height: "178cm" },
            { no: "21", name: "위파위", pos: "OH", posFull: "아웃사이드 히터", birth: "1999.02.02", height: "174cm" },
            { no: "23", name: "서지혜", pos: "OH", posFull: "아웃사이드 히터", birth: "2005.08.14", height: "174cm" }
        ]
    },
    pinkspiders: {
        name: "흥국생명 핑크스파이더스", league: "women", location: "인천광역시", stadium: "인천삼산월드체육관", coach: "마르첼로 아본단자", founded: "1971년", champs: "4회", lastRank: "2위", color: "#ff007f", logo: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=150",
        squad: [
            { no: "10", name: "김연경", pos: "OH", posFull: "아웃사이드 히터", birth: "1988.02.26", height: "192cm" },
            { no: "7", name: "김수지", pos: "MB", posFull: "미들 블로커", birth: "1987.06.20", height: "188cm" },
            { no: "4", name: "이원정", pos: "S", posFull: "세터", birth: "2000.01.12", height: "176cm" },
            { no: "5", name: "도수빈", pos: "L", posFull: "리베로", birth: "1998.06.21", height: "166cm" },
            { no: "20", name: "투쿠", pos: "OP", posFull: "아포짓 스파이커", birth: "1999.05.10", height: "188cm" },
            { no: "1", name: "김다은", pos: "OH", posFull: "아웃사이드 히터", birth: "2001.01.24", height: "180cm" },
            { no: "19", name: "김미연", pos: "OH", posFull: "아웃사이드 히터", birth: "1993.03.05", height: "177cm" },
            { no: "11", name: "박혜진", pos: "S", posFull: "세터", birth: "2002.04.15", height: "177cm" },
            { no: "9", name: "변지수", pos: "MB", posFull: "미들 블로커", birth: "1997.03.01", height: "181cm" },
            { no: "14", name: "임혜림", pos: "MB", posFull: "미들 블로커", birth: "2004.09.28", height: "184cm" },
            { no: "15", name: "김채연", pos: "MB", posFull: "미들 블로커", birth: "1999.12.11", height: "184cm" },
            { no: "17", name: "레이나", pos: "OH", posFull: "아웃사이드 히터", birth: "1999.12.23", height: "177cm" },
            { no: "21", name: "신연경", pos: "L", posFull: "리베로", birth: "1994.03.09", height: "167cm" }
        ]
    },
    redsparks: {
        name: "정관장 레드스파크스", league: "women", location: "대전광역시", stadium: "대전충무체육관", coach: "고희진", founded: "1988년", champs: "3회", lastRank: "3위", color: "#cc0000", logo: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=150",
        squad: [
            { no: "8", name: "메가", pos: "OP", posFull: "아포짓 스파이커", birth: "1999.09.20", height: "185cm" },
            { no: "1", name: "부키리치", pos: "OH", posFull: "아웃사이드 히터", birth: "1999.06.13", height: "198cm" },
            { no: "6", name: "박은진", pos: "MB", posFull: "미들 블로커", birth: "1999.12.15", height: "187cm" },
            { no: "12", name: "노란", pos: "L", posFull: "리베로", birth: "1994.03.17", height: "167cm" },
            { no: "7", name: "이예솔", pos: "OP", posFull: "아포짓 스파이커", birth: "2000.06.18", height: "177cm" },
            { no: "11", name: "박혜민", pos: "OH", posFull: "아웃사이드 히터", birth: "2000.11.08", height: "181cm" },
            { no: "15", name: "이선우", pos: "OH", posFull: "아웃사이드 히터", birth: "2002.07.12", height: "184cm" },
            { no: "17", name: "정호영", pos: "MB", posFull: "미들 블로커", birth: "2001.08.23", height: "190cm" },
            { no: "4", name: "최효서", pos: "L", posFull: "리베로", birth: "2004.05.20", height: "168cm" },
            { no: "14", name: "김채나", pos: "S", posFull: "세터", birth: "1996.05.04", height: "173cm" },
            { no: "20", name: "신은지", pos: "OP", posFull: "아포짓 스파이커", birth: "2005.07.14", height: "176cm" }
        ]
    },
    caltex: {
        name: "GS칼텍스 서울KIXX", league: "women", location: "서울특별시", stadium: "서울장충체육관", coach: "이영택", founded: "1970년", champs: "3회", lastRank: "4위", color: "#00a19a", logo: "https://images.unsplash.com/photo-1547347298-4074fed3016a?w=150",
        squad: [
            { no: "5", name: "실바", pos: "OP", posFull: "아포짓 스파이커", birth: "1991.03.21", height: "191cm" },
            { no: "19", name: "유서연", pos: "OH", posFull: "아웃사이드 히터", birth: "1999.01.12", height: "174cm" },
            { no: "9", name: "오세연", pos: "MB", posFull: "미들 블로커", birth: "2002.05.04", height: "180cm" },
            { no: "4", name: "한수진", pos: "L", posFull: "리베로", birth: "1999.07.02", height: "165cm" },
            { no: "1", name: "김지원", pos: "S", posFull: "세터", birth: "2001.10.26", height: "173cm" },
            { no: "8", name: "문지윤", pos: "OP", posFull: "아포짓 스파이커", birth: "2000.07.25", height: "181cm" },
            { no: "11", name: "최은지", pos: "OH", posFull: "아웃사이드 히터", birth: "1992.06.07", height: "182cm" },
            { no: "14", name: "김민지", pos: "L", posFull: "리베로", birth: "2004.04.12", height: "165cm" },
            { no: "20", name: "유가람", pos: "L", posFull: "리베로", birth: "2005.09.30", height: "166cm" },
            { no: "34", name: "권민지", pos: "OH", posFull: "아웃사이드 히터", birth: "2001.11.02", height: "178cm" }
        ]
    },
    altos: {
        name: "IBK기업은행 알토스", league: "women", location: "경기도 화성시", stadium: "화성종합경기타운", coach: "김호철", founded: "2011년", champs: "3회", lastRank: "5위", color: "#0053a1", logo: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=150",
        squad: [
            { no: "1", name: "이소영", pos: "OH", posFull: "아웃사이드 히터", birth: "1994.10.17", height: "176cm" },
            { no: "5", name: "김하경", pos: "S", posFull: "세터", birth: "1996.11.15", height: "174cm" },
            { no: "15", name: "최정민", pos: "MB", posFull: "미들 블로커", birth: "2002.12.21", height: "181cm" },
            { no: "7", name: "김희진", pos: "OP", posFull: "아포짓 스파이커", birth: "1991.04.29", height: "185cm" },
            { no: "11", name: "임혜림", pos: "MB", posFull: "미들 블로커", birth: "2004.09.28", height: "184cm" },
            { no: "17", name: "김현정", pos: "MB", posFull: "미들 블로커", birth: "1998.08.28", height: "180cm" },
            { no: "18", name: "육서영", pos: "OH", posFull: "아웃사이드 히터", birth: "2001.06.09", height: "180cm" },
            { no: "20", name: "아베크롬비", pos: "OP", posFull: "아포짓 스파이커", birth: "1995.05.11", height: "191cm" }
        ]
    },
    hipass: {
        name: "한국도로공사 하이패스", league: "women", location: "경상북도 김천시", stadium: "김천실내체육관", coach: "김종민", founded: "1970년", champs: "2회", lastRank: "6위", color: "#003A8C", logo: "https://images.unsplash.com/photo-1599422315653-5962cf2ffd3d?w=150",
        squad: [
            { no: "10", name: "배유나", pos: "MB", posFull: "미들 블로커", birth: "1989.11.30", height: "180cm" },
            { no: "6", name: "이윤정", pos: "S", posFull: "세터", birth: "1997.05.29", height: "172cm" },
            { no: "8", name: "임명옥", pos: "L", posFull: "리베로", birth: "1986.03.12", height: "175cm" },
            { no: "12", name: "문정원", pos: "OP", posFull: "아포짓 스파이커", birth: "1992.03.24", height: "174cm" },
            { no: "4", name: "전새얀", pos: "OH", posFull: "아웃사이드 히터", birth: "1996.11.27", height: "178cm" },
            { no: "5", name: "김세빈", pos: "MB", posFull: "미들 블로커", birth: "2005.06.16", height: "187cm" },
            { no: "7", name: "안예림", pos: "S", posFull: "세터", birth: "2002.09.21", height: "182cm" },
            { no: "11", name: "이예은", pos: "OH", posFull: "아웃사이드 히터", birth: "2004.04.22", height: "175cm" }
        ]
    },
    peppers: {
        name: "페퍼저축은행 AI페퍼스", league: "women", location: "광주광역시", stadium: "페퍼스타디움", coach: "장소연", founded: "2021년", champs: "0회", lastRank: "7위", color: "#e30613", logo: "https://images.unsplash.com/photo-1562074244-a482f4c6629d?w=150",
        squad: [
            { no: "9", name: "박정아", pos: "OH", posFull: "아웃사이드 히터", birth: "1993.03.26", height: "187cm" },
            { no: "14", name: "이고은", pos: "S", posFull: "세터", birth: "1995.01.09", height: "170cm" },
            { no: "17", name: "하혜진", pos: "MB", posFull: "미들 블로커", birth: "1996.09.07", height: "181cm" },
            { no: "1", name: "채선아", pos: "OH", posFull: "아웃사이드 히터", birth: "1992.06.08", height: "175cm" },
            { no: "4", name: "서채원", pos: "MB", posFull: "미들 블로커", birth: "2003.09.20", height: "181cm" },
            { no: "7", name: "이한비", pos: "OH", posFull: "아웃사이드 히터", birth: "1996.10.28", height: "177cm" },
            { no: "10", name: "박은서", pos: "OH", posFull: "아웃사이드 히터", birth: "2003.09.04", height: "178cm" },
            { no: "23", name: "야스민", pos: "OP", posFull: "아포짓 스파이커", birth: "1996.01.08", height: "192cm" }
        ]
    },

    // ==========================================
    // 남자부 (7개 팀) 전체 데이터
    // ==========================================
    air: {
        name: "대한항공 점보스", league: "men", location: "인천광역시", stadium: "인천계양체육관", coach: "토미 틸리카이넨", founded: "1969년", champs: "4회", lastRank: "1위 (통합우승)", color: "#004690", logo: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=150",
        squad: [
            { no: "2", name: "한선수", pos: "S", posFull: "세터", birth: "1985.12.16", height: "189cm" },
            { no: "10", name: "정지석", pos: "OH", posFull: "아웃사이드 히터", birth: "1995.03.10", height: "194cm" },
            { no: "1", name: "곽승석", pos: "OH", posFull: "아웃사이드 히터", birth: "1988.03.23", height: "190cm" },
            { no: "5", name: "유광우", pos: "S", posFull: "세터", birth: "1985.04.22", height: "184cm" },
            { no: "9", name: "김민재", pos: "MB", posFull: "미들 블로커", birth: "2003.04.04", height: "196cm" },
            { no: "12", name: "조재영", pos: "MB", posFull: "미들 블로커", birth: "1991.08.21", height: "195cm" },
            { no: "14", name: "오은렬", pos: "L", posFull: "리베로", birth: "1997.08.20", height: "178cm" },
            { no: "16", name: "정한용", pos: "OH", posFull: "아웃사이드 히터", birth: "2001.07.31", height: "194cm" },
            { no: "18", name: "링컨", pos: "OP", posFull: "아포짓 스파이커", birth: "1993.03.14", height: "200cm" }
        ]
    },
    sky: {
        name: "현대캐피탈 스카이워커스", league: "men", location: "충청남도 천안시", stadium: "유관순체육관", coach: "필립 블랑", founded: "1983년", champs: "4회", lastRank: "2위", color: "#111111", logo: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=150",
        squad: [
            { no: "15", name: "허수봉", pos: "OP", posFull: "아포짓 스파이커", birth: "1998.04.07", height: "195cm" },
            { no: "11", name: "최민호", pos: "MB", posFull: "미들 블로커", birth: "1988.04.28", height: "195cm" },
            { no: "6", name: "김명관", pos: "S", posFull: "세터", birth: "1997.11.27", height: "197cm" },
            { no: "14", name: "박경민", pos: "L", posFull: "리베로", birth: "1999.06.05", height: "170cm" },
            { no: "1", name: "문성민", pos: "OP", posFull: "아포짓 스파이커", birth: "1986.09.14", height: "198cm" },
            { no: "3", name: "전광인", pos: "OH", posFull: "아웃사이드 히터", birth: "1991.09.18", height: "194cm" },
            { no: "7", name: "홍동선", pos: "OH", posFull: "아웃사이드 히터", birth: "2001.05.16", height: "198cm" },
            { no: "18", name: "아흐메드", pos: "OP", posFull: "아포짓 스파이커", birth: "1996.02.12", height: "200cm" }
        ]
    },
    ok: {
        name: "OK금융그룹 읏맨", league: "men", location: "경기도 안산시", stadium: "안산상록수체육관", coach: "오기노 마사지", founded: "2013년", champs: "2회", lastRank: "3위", color: "#ff5000", logo: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=150",
        squad: [
            { no: "7", name: "신호진", pos: "OP", posFull: "아포짓 스파이커", birth: "2001.03.25", height: "186cm" },
            { no: "2", name: "곽명우", pos: "S", posFull: "세터", birth: "1991.04.08", height: "193cm" },
            { no: "3", name: "정성현", pos: "L", posFull: "리베로", birth: "1991.03.16", height: "180cm" },
            { no: "6", name: "진상헌", pos: "MB", posFull: "미들 블로커", birth: "1986.03.06", height: "198cm" },
            { no: "8", name: "차지환", pos: "OH", posFull: "아웃사이드 히터", birth: "1996.05.09", height: "201cm" },
            { no: "11", name: "바야르사이한", pos: "MB", posFull: "미들 블로커", birth: "1998.08.14", height: "197cm" },
            { no: "18", name: "송희채", pos: "OH", posFull: "아웃사이드 히터", birth: "1992.04.29", height: "190cm" },
            { no: "20", name: "레오", pos: "OH", posFull: "아웃사이드 히터", birth: "1990.05.06", height: "207cm" }
        ]
    },
    woori: {
        name: "우리카드 우리WON", league: "men", location: "서울특별시", stadium: "서울장충체육관", coach: "마uri시오 파에스", founded: "2008년", champs: "0회", lastRank: "4위", color: "#0072ce", logo: "https://images.unsplash.com/photo-1547347298-4074fed3016a?w=150",
        squad: [
            { no: "9", name: "김지한", pos: "OH", posFull: "아웃사이드 히터", birth: "1999.09.16", height: "197cm" },
            { no: "3", name: "한태준", pos: "S", posFull: "세터", birth: "2004.04.05", height: "180cm" },
            { no: "4", name: "송명근", pos: "OH", posFull: "아웃사이드 히터", birth: "1993.03.12", height: "195cm" },
            { no: "6", name: "오재성", pos: "L", posFull: "리베로", birth: "1992.04.02", height: "175cm" },
            { no: "13", name: "박진우", pos: "MB", posFull: "미들 블로커", birth: "1990.03.18", height: "197cm" },
            { no: "20", name: "이상현", pos: "MB", posFull: "미들 블로커", birth: "2000.04.07", height: "201cm" },
            { no: "55", name: "마테이", pos: "OH", posFull: "아웃사이드 히터", birth: "1996.09.23", height: "199cm" }
        ]
    },
    vixtorm: {
        name: "한국전력 빅스톰", league: "men", location: "경기도 수원시", stadium: "수원실내체육관", coach: "권영민", founded: "1945년", champs: "0회", lastRank: "5위", color: "#f37021", logo: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=150",
        squad: [
            { no: "11", name: "임성진", pos: "OH", posFull: "아웃사이드 히터", birth: "1999.01.11", height: "195cm" },
            { no: "1", name: "서재덕", pos: "OP", posFull: "아포짓 스파이커", birth: "1989.07.21", height: "194cm" },
            { no: "5", name: "하승우", pos: "S", posFull: "세터", birth: "1995.04.14", height: "185cm" },
            { no: "8", name: "신영석", pos: "MB", posFull: "미들 블로커", birth: "1986.10.04", height: "200cm" },
            { no: "16", name: "료헤이", pos: "L", posFull: "리베로", birth: "1994.10.28", height: "171cm" },
            { no: "20", name: "타이즈", pos: "OH", posFull: "아웃사이드 히터", birth: "1994.04.28", height: "201cm" }
        ]
    },
    bluefangs: {
        name: "삼성화재 블루팡스", league: "men", location: "대전광역시", stadium: "대전충무체육관", coach: "김상우", founded: "1995년", champs: "8회", lastRank: "6위", color: "#00529b", logo: "https://images.unsplash.com/photo-1599422315653-5962cf2ffd3d?w=150",
        squad: [
            { no: "1", name: "김정호", pos: "OH", posFull: "아웃사이드 히터", birth: "1997.03.01", height: "187cm" },
            { no: "4", name: "노재욱", pos: "S", posFull: "세터", birth: "1992.07.10", height: "191cm" },
            { no: "8", name: "이상욱", pos: "L", posFull: "리베로", birth: "1995.07.08", height: "183cm" },
            { no: "11", name: "김준우", pos: "MB", posFull: "미들 블로커", birth: "2000.04.16", height: "195cm" },
            { no: "14", name: "신장호", pos: "OH", posFull: "아웃사이드 히터", birth: "1996.06.01", height: "192cm" },
            { no: "20", name: "요스바니", pos: "OP", posFull: "아포짓 스파이커", birth: "1991.06.23", height: "201cm" }
        ]
    },
    stars: {
        name: "KB손해보험 스타즈", league: "men", location: "경기도 의정부시", stadium: "의정부체육관", coach: "미겔 리베라", founded: "1976년", champs: "0회", lastRank: "7위", color: "#ffb81c", logo: "https://images.unsplash.com/photo-1562074244-a482f4c6629d?w=150",
        squad: [
            { no: "4", name: "황택의", pos: "S", posFull: "세터", birth: "1996.11.12", height: "189cm" },
            { no: "1", name: "정민수", pos: "L", posFull: "리베로", birth: "1991.10.05", height: "175cm" },
            { no: "2", name: "한성정", pos: "OH", posFull: "아웃사이드 히터", birth: "1996.07.25", height: "195cm" },
            { no: "12", name: "황경민", pos: "OH", posFull: "아웃사이드 히터", birth: "1996.04.10", height: "189cm" },
            { no: "14", name: "비예나", pos: "OP", posFull: "아포짓 스파이커", birth: "1993.03.09", height: "189cm" },
            { no: "17", name: "박진우", pos: "MB", posFull: "미들 블로커", birth: "1990.03.18", height: "197cm" }
        ]
    }
};

let currentTeamKey = 'hillstate'; // 현재 선택된 팀 키
let currentFilter = 'all';        // 현재 포지션 필터 상태

// 2. 대시보드 화면 내용 갱신 함수
function updateDashboard(teamKey) {
    currentTeamKey = teamKey;
    const team = teamDatabase[teamKey];
    
    // 테마 컬러 변경 변수 주입
    document.documentElement.style.setProperty('--primary-color', team.color);

    // 상단 및 테이블 데이터 렌더링
    document.getElementById('header-team-name').innerText = team.name;
    document.getElementById('header-logo').src = team.logo;
    document.getElementById('info-location').innerText = team.location;
    document.getElementById('info-stadium').innerText = team.stadium;
    document.getElementById('info-coach').innerText = team.coach;
    document.getElementById('info-founded').innerText = team.founded;
    document.getElementById('info-champs').innerText = team.champs;
    document.getElementById('info-last-rank').innerText = team.lastRank;

    // 선수단 목록 출력 호출
    renderSquad();
}

// 3. 포지션 필터 조건에 맞게 선수 카드를 화면에 출력하는 함수
function renderSquad() {
    const gridArea = document.getElementById('player-grid-area');
    gridArea.innerHTML = '';

    const squadList = teamDatabase[currentTeamKey].squad;
    
    // 필터링 적용
    const filteredSquad = currentFilter === 'all' 
        ? squadList 
        : squadList.filter(player => player.pos === currentFilter);

    if (filteredSquad.length === 0) {
        gridArea.innerHTML = `<div class="no-data">해당 포지션에 등록된 선수가 없습니다.</div>`;
        return;
    }

    // 선수단 루프 돌며 카드 컴포넌트 추가
    filteredSquad.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
            <div class="player-num">${player.no}</div>
            <div class="player-info-main">
                <h4>${player.name}</h4>
                <p class="player-pos-badge">${player.posFull}</p>
            </div>
            <div class="player-details">
                <span><i class="fa-solid fa-cake-candles"></i> ${player.birth}</span>
                <span><i class="fa-solid fa-arrows-up-down"></i> ${player.height}</span>
            </div>
        `;
        gridArea.appendChild(card);
    });
}

// 4. 리그 탭 메뉴(남/여)에 따른 팀 버튼 목록 자동 생성 함수
function renderTeamNav(league) {
    const nav = document.querySelector('.team-nav');
    nav.innerHTML = '';

    Object.keys(teamDatabase).forEach(key => {
        const team = teamDatabase[key];
        if (team.league === league) {
            const btn = document.createElement('button');
            btn.className = `team-item-btn ${key === currentTeamKey ? 'active' : ''}`;
            btn.innerHTML = `<i class="fa-solid fa-chevron-right"></i> ${team.name}`;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.team-item-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                updateDashboard(key);
            });
            nav.appendChild(btn);
        }
    });
}

// 5. 인터랙션 이벤트 바인딩
document.querySelectorAll('.league-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.league-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        const selectedLeague = e.target.dataset.league;
        const firstTeamKey = Object.keys(teamDatabase).find(key => teamDatabase[key].league === selectedLeague);
        
        renderTeamNav(selectedLeague);
        if (firstTeamKey) updateDashboard(firstTeamKey);
    });
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.pos;
        renderSquad();
    });
});

// 6. 페이지 최초 진입 초기 시동 함수
document.addEventListener('DOMContentLoaded', () => {
    renderTeamNav('women');
    updateDashboard('hillstate');
});
