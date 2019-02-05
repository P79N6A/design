var messages = {
  静态栅格: 'Static Grid',
  '此为新版静态栅格。如果设计环境中不存在30N的老式框架，同时也暂时不需要做响应式，便可以使用此栅格系统。':
    'This is the new version of static grid. The grid system can be used if there is no 30N old-fashioned frame in the design environment, and no need to make a responsive grid temporarily.',
  '全新的静态栅格模组，在响应式设计中与响应式栅格一起被使用，也可被单独使用，从而提高页面设计的自由度和适配性，主要用来呈现响应式框架中不需要被响应的部分。静态栅格的宽度必须为20的倍数，且最大宽度不超过320，最小宽度为20。':
    'An all-new static grid module can be used together with the responsive grid in the responsive design, or used separately, to improve the flexibility and adaptability in page designing. It is mainly used to present the parts that do not need to be responded in the responsive frame. The width of the static grid must be in multiples of 20, with its maximum width not more than 320 pixels and minimum width of 20.',
  静态栅格的宽度极限: 'Width Limit of Static Grid',
  'Max = 320 Min = 20px (页面宽度小于720)':
    'Max = 320 Min = 20 (page is less than 720 in width)',
  '在响应式框架中，当页面宽度不小于720时，单一固定模块的宽度不得大于320，且不得小于20。当页面宽度小于720时则没有这个限制，但所有模块必须是响应模块（R％）。':
    'In a responsive frame, when a page is not less than 720 pixels in width, the width of a single fixed module should not be greater than 320 and smaller than 20. And such a restriction does not apply when the page is smaller than 720 in width, but all the modules must be responsive modules (R%).',
  响应式栅格的分割: 'Segmentation of Responsive Grids',
  响应式栅格: 'Responsive Grid',
  '响应式栅格在响应式设计中与静态栅格一起被使用，也可被单独使用。响应式栅格没有既定的宽度限制，其宽度按百分比进行计算。响应式栅格可至多被6等分，以满足不同页面的设计需求。每个被等分的栅格仍可以被再次等分，至多6等分，以此类推。':
    'Responsive Grid is used together with static grid in a responsive design, but it can also be used alone. The responsive grid has no certain width limit, and its width is calculated by percentage. A responsive grid can be divided into 6 equal parts at most to meet the requirements of various page designs. Each equally divided grid can be equally divided again, but up to 6 equal parts, and so on...',
  '响应式页面的外、内边距：':
    'The Outer and Inner Margins of the Responsive Page:',
  外边距: 'Outer Margin',
  '当页面的理论宽度不小于720时，16（两侧共计32）的外边距会被添加到设计稿中。外边距会被计算在页面理论宽度之外，即在页面的理论宽度上额外增加32的两侧留白，才为当前页面的实际宽度。':
    'When the theoretical width of the page is not less than 720, the outer margin of 16 (32 in total for both sides) will be added to the design. The outer margin will be excluded from the theoretical width of the page, which means the actual width of the current page equals to theoretical width of the page plus the additional 32 on each side for blank.',
  内边距: 'Inner Margin',
  '在页面理论宽度小于720时，页面的实际宽度＝理论宽度，但是会被额外扣除24像素（两侧各12）的内边距。在设计时请注意区分。':
    'When the theoretical width of the page is less than 720, the actual width of the page equals theoretical width, but the inner margin of 24 (12 on each side) will be deducted. Please pay attention to this in design.',
}
