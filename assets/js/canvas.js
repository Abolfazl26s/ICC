var canvas = document.getElementById('nokey'),
  can_w = parseInt(canvas.getAttribute('width')),
  can_h = parseInt(canvas.getAttribute('height')),
  ctx = canvas.getContext('2d'),
  BALL_NUM = 100,
  ball = { x: 0, y: 0, vx: 0, vy: 0, r: 0, alpha: 0.8, phase: 0 },
  ball_color = { r: 248, g: 155, b: 23 },
  R = 3,
  balls = [],
  alpha_f = 0.02,
  alpha_phase = 0,
  link_line_width = 0.9,
  dis_limit = 260,
  add_mouse_point = !0,
  mouse_in = !1,
  mouse_ball = { x: 0, y: 0, vx: 0, vy: 0, r: 0, type: 'mouse' };
function getRandomSpeed(a) {
  var e = -1;
  switch (a) {
    case 'top':
      return [randomNumFrom(e, 1), randomNumFrom(0.1, 1)];
      break;
    case 'right':
      return [randomNumFrom(e, -0.1), randomNumFrom(e, 1)];
      break;
    case 'bottom':
      return [randomNumFrom(e, 1), randomNumFrom(e, -0.1)];
      break;
    case 'left':
      return [randomNumFrom(0.1, 1), randomNumFrom(e, 1)];
      break;
    default:
      return;
      break;
  }
}
function randomArrayItem(a) {
  return a[Math.floor(Math.random() * a.length)];
}
function randomNumFrom(a, e) {
  return Math.random() * (e - a) + a;
}
function getRandomBall() {
  switch (randomArrayItem(['top', 'right', 'bottom', 'left'])) {
    case 'top':
      return {
        x: randomSidePos(can_w),
        y: -R,
        vx: getRandomSpeed('top')[0],
        vy: getRandomSpeed('top')[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10),
      };
      break;
    case 'right':
      return {
        x: can_w + R,
        y: randomSidePos(can_h),
        vx: getRandomSpeed('right')[0],
        vy: getRandomSpeed('right')[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10),
      };
      break;
    case 'bottom':
      return {
        x: randomSidePos(can_w),
        y: can_h + R,
        vx: getRandomSpeed('bottom')[0],
        vy: getRandomSpeed('bottom')[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10),
      };
      break;
    case 'left':
      return {
        x: -R,
        y: randomSidePos(can_h),
        vx: getRandomSpeed('left')[0],
        vy: getRandomSpeed('left')[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10),
      };
      break;
  }
}
function randomSidePos(a) {
  return Math.ceil(Math.random() * a);
}
function renderBalls() {
  Array.prototype.forEach.call(balls, function (a) {
    a.hasOwnProperty('type') ||
      ((ctx.fillStyle =
        'rgba(' +
        ball_color.r +
        ',' +
        ball_color.g +
        ',' +
        ball_color.b +
        ',' +
        a.alpha +
        ')'),
      ctx.beginPath(),
      ctx.arc(a.x, a.y, R, 0, 2 * Math.PI, !0),
      ctx.closePath(),
      ctx.fill());
  });
}
function updateBalls() {
  var a = [];
  Array.prototype.forEach.call(balls, function (e) {
    (e.x += e.vx),
      (e.y += e.vy),
      e.x > -50 &&
        e.x < can_w + 50 &&
        e.y > -50 &&
        e.y < can_h + 50 &&
        a.push(e),
      (e.phase += alpha_f),
      (e.alpha = Math.abs(Math.cos(e.phase)));
  }),
    (balls = a.slice(0));
}
function loopAlphaInf() {}
function renderLines() {
  for (var a, e, t = 0; t < balls.length; t++)
    for (var n = t + 1; n < balls.length; n++)
      (a = getDisOf(balls[t], balls[n]) / dis_limit) < 1 &&
        ((e = (1 - a).toString()),
        (ctx.strokeStyle = 'rgba(150,150,150,' + e + ')'),
        (ctx.lineWidth = link_line_width),
        ctx.beginPath(),
        ctx.moveTo(balls[t].x, balls[t].y),
        ctx.lineTo(balls[n].x, balls[n].y),
        ctx.stroke(),
        ctx.closePath());
}
function getDisOf(a, e) {
  var t = Math.abs(a.x - e.x),
    n = Math.abs(a.y - e.y);
  return Math.sqrt(t * t + n * n);
}
function addBallIfy() {
  balls.length < BALL_NUM && balls.push(getRandomBall());
}
function render() {
  ctx.clearRect(0, 0, can_w, can_h),
    renderBalls(),
    renderLines(),
    updateBalls(),
    addBallIfy(),
    window.requestAnimationFrame(render);
}
function initBalls(a) {
  for (var e = 1; e <= a; e++)
    balls.push({
      x: randomSidePos(can_w),
      y: randomSidePos(can_h),
      vx: getRandomSpeed('top')[0],
      vy: getRandomSpeed('top')[1],
      r: R,
      alpha: 1,
      phase: randomNumFrom(0, 10),
    });
}
function initCanvas() {
  canvas.setAttribute('width', window.innerWidth),
    canvas.setAttribute('height', window.innerHeight),
    (can_w = parseInt(canvas.getAttribute('width'))),
    (can_h = parseInt(canvas.getAttribute('height')));
}
function goMovie() {
  initCanvas(), initBalls(BALL_NUM), window.requestAnimationFrame(render);
}
window.addEventListener('resize', function (a) {
  initCanvas();
}),
  goMovie(),
  canvas.addEventListener('mouseenter', function () {
    (mouse_in = !0), balls.push(mouse_ball);
  }),
  canvas.addEventListener('mouseleave', function () {
    mouse_in = !1;
    var a = [];
    Array.prototype.forEach.call(balls, function (e) {
      e.hasOwnProperty('type') || a.push(e);
    }),
      (balls = a.slice(0));
  }),
  canvas.addEventListener('mousemove', function (a) {
    (a = a || window.event), (mouse_ball.x = a.pageX), (mouse_ball.y = a.pageY);
  });
