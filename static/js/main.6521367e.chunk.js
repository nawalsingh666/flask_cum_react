(this.webpackJsonphello_world_2=this.webpackJsonphello_world_2||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),l=t(4),o=t.n(l),s=(t(13),t(1)),c=t(5),i=t(6),u=t(8),_=t(7),g=(t(14),t(0)),h=function(e){Object(u.a)(t,e);var a=Object(_.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).handleClick=function(a){e.state.game_finished||e.setState((function(t){var n=Object(s.a)(t.arena),r=parseInt(a.target.dataset.key.split(",")[0]),l=parseInt(a.target.dataset.key.split(",")[1]);if(null===n[r][l])return n[r][l]=e.state.xs_turn?"x":"o",console.log("new arena",n),{arena:Object(s.a)(n),xs_turn:!t.xs_turn,filled_places:t.filled_places+1};console.log("early return ):")}),e.checkGameStatus)},e.checkGameStatus=function(){console.log("checking primary diagonal"),e.checkPrimaryDiagonal()},e.checkPrimaryDiagonal=function(){null!==e.state.arena[0][0]&&null!==e.state.arena[1][1]&&null!==e.state.arena[2][2]&&e.state.arena[0][0]===e.state.arena[1][1]&&e.state.arena[0][0]===e.state.arena[2][2]?e.setState((function(a){var t=Object(s.a)(a.arena_colors);return t[0][0]="green_color",t[1][1]="green_color",t[2][2]="green_color",{game_finished:!0,game_result_message:"Player ".concat(e.state.xs_turn?"o":"x"," won!! "),arena_colors:Object(s.a)(t)}}),e.checkOtherDiagonal):e.checkOtherDiagonal()},e.checkOtherDiagonal=function(){console.log("checking other diagonal"),null!==e.state.arena[2][0]&&null!==e.state.arena[1][1]&&null!==e.state.arena[0][2]&&e.state.arena[2][0]===e.state.arena[1][1]&&e.state.arena[2][0]===e.state.arena[0][2]?e.setState((function(a){var t=Object(s.a)(a.arena_colors);return t[2][0]="green_color",t[1][1]="green_color",t[0][2]="green_color",{game_finished:!0,game_result_message:"Player ".concat(e.state.xs_turn?"o":"x"," won!! "),arena_colors:Object(s.a)(t)}}),e.checkColumns):e.checkColumns()},e.checkColumns=function(){console.log("checking cols");for(var a=function(a){if(null!==e.state.arena[0][a]&&null!==e.state.arena[1][a]&&null!==e.state.arena[2][a]&&e.state.arena[0][a]===e.state.arena[1][a]&&e.state.arena[0][a]===e.state.arena[2][a])return e.setState((function(t){console.log("won the game, setting game finihsed");var n=Object(s.a)(t.arena_colors);return n[0][a]="green_color",n[1][a]="green_color",n[2][a]="green_color",{game_finished:!0,game_result_message:"Player ".concat(e.state.xs_turn?"o":"x"," won!! "),arena_colors:Object(s.a)(n)}}),e.checkRows),{v:void 0}},t=0;t<e.state.arena.length;t++){var n=a(t);if("object"===typeof n)return n.v}e.checkRows()},e.checkRows=function(){console.log("checking rows");for(var a=function(a){if(null!==e.state.arena[a][0]&&null!==e.state.arena[a][1]&&null!==e.state.arena[a][2]&&e.state.arena[a][0]===e.state.arena[a][1]&&e.state.arena[a][0]===e.state.arena[a][2])return e.setState((function(t){var n=Object(s.a)(t.arena_colors);return n[a][0]="green_color",n[a][1]="green_color",n[a][2]="green_color",{game_finished:!0,game_result_message:"Player ".concat(e.state.xs_turn?"o":"x"," won!! "),arena_colors:Object(s.a)(n)}}),e.checkDraw),{v:void 0}},t=0;t<e.state.arena.length;t++){var n=a(t);if("object"===typeof n)return n.v}e.checkDraw()},e.checkDraw=function(){console.log("game finished?? ",e.state.game_finished),console.log("game filled_places ",e.state.filled_places),e.state.game_finished||9!==e.state.filled_places||e.setState({arena_colors:[["gray_color","gray_color","gray_color"],["gray_color","gray_color","gray_color"],["gray_color","gray_color","gray_color"]]}),console.log("game finished again?? ",e.state.game_finished)},e.resetGame=function(){e.setState({arena:[[null,null,null],[null,null,null],[null,null,null]],game_finished:!1,xs_turn:!0,filled_places:0,arena_colors:[["bisque_color","bisque_color","bisque_color"],["bisque_color","bisque_color","bisque_color"],["bisque_color","bisque_color","bisque_color"]]})},e.state={arena:[[null,null,null],[null,null,null],[null,null,null]],xs_turn:!0,filled_places:0,game_finished:!1,game_result_message:"",arena_colors:[["bisque_color","bisque_color","bisque_color"],["bisque_color","bisque_color","bisque_color"],["bisque_color","bisque_color","bisque_color"]]},e}return Object(i.a)(t,[{key:"render",value:function(){for(var e=[],a=0;a<this.state.arena.length;a++){for(var t=[],n=0;n<this.state.arena[a].length;n++)t.push(Object(g.jsxs)("td",{className:this.state.arena_colors[a][n],"data-key":[a,n],onClick:this.handleClick,children:[" ",null==this.state.arena[a][n]?" ":this.state.arena[a][n]," "]}));e.push(Object(g.jsxs)("tr",{children:[" ",t," "]}))}return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("canvas",{id:"myCanvas",children:" "}),Object(g.jsx)("h1",{children:" Tic Tac Toe "}),Object(g.jsx)("table",{id:"tic_tac_toe_arena",children:e}),Object(g.jsxs)("h3",{id:"game_result",children:[" ",this.state.game_result_message," "]}),Object(g.jsx)("button",{id:"reset_game",onClick:this.resetGame,children:" Reset Game "})]})}}]),t}(r.a.Component),f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,o=a.getTTFB;t(e),n(e),r(e),l(e),o(e)}))};o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(h,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.6521367e.chunk.js.map