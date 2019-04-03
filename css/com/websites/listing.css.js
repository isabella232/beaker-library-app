import {css} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import commonCSS from '/vendor/beaker-app-stdlib/css/common.css.js'

const cssStr = css`
${commonCSS}

:host {
  user-select: none;
  width: 810px;
}

.row {
  height: auto;
  padding: 20px;
}

.row .col:not(.title) {
  color: rgba(0,0,0,.5);
}

.favicon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  position: relative;
  top: -1px;
  margin-right: 2px;
}

.title-line,
.description-line,
.local-path-line {
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title-line {
  font-size: 15px;
  font-weight: 500;
}

.title-line a {
  color: var(--blue);
}

.title-line a:hover {
  text-decoration: underline;
}

.description-line {
  font-size: 14px;
  color: rgba(0,0,0,.7);
  white-space: normal;
}

.local-path-line {
  padding: 3px 0;
  font-size: 11px;
  font-weight: 500;
  display: inline-block;
}

.meta-line {
  font-size: 13px;
  color: rgba(0,0,0,.7);
}

.meta-line span {
  display: inline-block;
  margin-right: 20px;
}

.meta-line i {
  font-size: 11px;
}

.empty {
  background: #fff;
  color: gray;
  text-align: center;
  padding: 150px 0;
  font-size: 16px;
  border: 1px solid #e6e6e6;
}
`
export default cssStr