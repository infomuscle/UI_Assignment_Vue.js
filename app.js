var app = new Vue({
  el: '#category',

  data: {
    jsonCTG: 'SAMPLE JSON',     // CTG Key의 Value
    depth1Index: null,          // 현재 선택된 Depth 1의 인덱스
    depth2Index: null,          // 현재 선택된 Depth 2의 인덱스
    depth2Selected: null        // 현재 선택된 Depth 2의 ID 값
  },

  methods: {
    // Depth 1 인덱스 가져오기
    getDepth1Index: function(index){
      this.depth1Index = index;
    },

    // Depth 2 클릭 -> 콘솔에 ID 출력
    consoleLogID: function(index){
      this.depth2Index = index;
      this.depth2Selected = this.jsonCTG[this.depth1Index]["L"][this.depth2Index]["ID"];
      console.log(this.depth2Selected);
    }
  },

  mounted() {
    // JSON 객체 생성
    var self = this;
    axios.get("http://dev-static.ssgcdn.com/common/ui/json/ctg/ctg_6005_mo.json").then(function(response){
      self.jsonCTG = response["data"]["CTG"];
    });

    // 메뉴(Depth 1) 토글
    $(".d1").next().slideUp();
    $(".d1").click(function(){
      $(this).next().slideToggle(300);
      $(this).toggleClass("selected");
      $(".d1").not(this).next().slideUp(300);
      $(".d1").not(this).removeClass("selected");
      return false;
    });
  }
});
