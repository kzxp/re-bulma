const csjs = require('csjs');

module.exports = csjs`
.column {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
  background: transparent;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  padding: 10px;
}

.columns {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
  background: transparent;
}

.columns.is-mobile > .column.is-narrow {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
}

.columns.is-mobile > .column.is-full {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 100%;
}

.columns.is-mobile > .column.is-three-quarters {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 75%;
}

.columns.is-mobile > .column.is-two-thirds {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 66.6666%;
}

.columns.is-mobile > .column.is-half {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 50%;
}

.columns.is-mobile > .column.is-one-third {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 33.3333%;
}

.columns.is-mobile > .column.is-one-quarter {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 25%;
}

.columns.is-mobile > .column.is-offset-three-quarters {
  margin-left: 75%;
}

.columns.is-mobile > .column.is-offset-two-thirds {
  margin-left: 66.6666%;
}

.columns.is-mobile > .column.is-offset-half {
  margin-left: 50%;
}

.columns.is-mobile > .column.is-offset-one-third {
  margin-left: 33.3333%;
}

.columns.is-mobile > .column.is-offset-one-quarter {
  margin-left: 25%;
}

.columns.is-mobile > .column.is-1 {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 8.33333%;
}

.columns.is-mobile > .column.is-offset-1 {
  margin-left: 8.33333%;
}

.columns.is-mobile > .column.is-2 {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 16.66667%;
}

.columns.is-mobile > .column.is-offset-2 {
  margin-left: 16.66667%;
}

.columns.is-mobile > .column.is-3 {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 25%;
}

.columns.is-mobile > .column.is-offset-3 {
  margin-left: 25%;
}

.columns.is-mobile > .column.is-4 {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 33.33333%;
}

.columns.is-mobile > .column.is-offset-4 {
  margin-left: 33.33333%;
}

.columns.is-mobile > .column.is-5 {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 41.66667%;
}

.columns.is-mobile > .column.is-offset-5 {
  margin-left: 41.66667%;
}

.columns.is-mobile > .column.is-6 {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 50%;
}

.columns.is-mobile > .column.is-offset-6 {
  margin-left: 50%;
}

.columns.is-mobile > .column.is-7 {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 58.33333%;
}

.columns.is-mobile > .column.is-offset-7 {
  margin-left: 58.33333%;
}

.columns.is-mobile > .column.is-8 {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 66.66667%;
}

.columns.is-mobile > .column.is-offset-8 {
  margin-left: 66.66667%;
}

.columns.is-mobile > .column.is-9 {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 75%;
}

.columns.is-mobile > .column.is-offset-9 {
  margin-left: 75%;
}

.columns.is-mobile > .column.is-10 {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 83.33333%;
}

.columns.is-mobile > .column.is-offset-10 {
  margin-left: 83.33333%;
}

.columns.is-mobile > .column.is-11 {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 91.66667%;
}

.columns.is-mobile > .column.is-offset-11 {
  margin-left: 91.66667%;
}

.columns.is-mobile > .column.is-12 {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: 100%;
}

.columns.is-mobile > .column.is-offset-12 {
  margin-left: 100%;
}

@media screen and (max-width: 768px) {
  .column.is-narrow-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
  }
  .column.is-full-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 100%;
  }
  .column.is-three-quarters-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 75%;
  }
  .column.is-two-thirds-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 66.6666%;
  }
  .column.is-half-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 50%;
  }
  .column.is-one-third-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 25%;
  }
  .column.is-offset-three-quarters-mobile {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-mobile {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-mobile {
    margin-left: 50%;
  }
  .column.is-offset-one-third-mobile {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-mobile {
    margin-left: 25%;
  }
  .column.is-1-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 8.33333%;
  }
  .column.is-offset-1-mobile {
    margin-left: 8.33333%;
  }
  .column.is-2-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 16.66667%;
  }
  .column.is-offset-2-mobile {
    margin-left: 16.66667%;
  }
  .column.is-3-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 25%;
  }
  .column.is-offset-3-mobile {
    margin-left: 25%;
  }
  .column.is-4-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 33.33333%;
  }
  .column.is-offset-4-mobile {
    margin-left: 33.33333%;
  }
  .column.is-5-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 41.66667%;
  }
  .column.is-offset-5-mobile {
    margin-left: 41.66667%;
  }
  .column.is-6-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 50%;
  }
  .column.is-offset-6-mobile {
    margin-left: 50%;
  }
  .column.is-7-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 58.33333%;
  }
  .column.is-offset-7-mobile {
    margin-left: 58.33333%;
  }
  .column.is-8-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 66.66667%;
  }
  .column.is-offset-8-mobile {
    margin-left: 66.66667%;
  }
  .column.is-9-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 75%;
  }
  .column.is-offset-9-mobile {
    margin-left: 75%;
  }
  .column.is-10-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 83.33333%;
  }
  .column.is-offset-10-mobile {
    margin-left: 83.33333%;
  }
  .column.is-11-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 91.66667%;
  }
  .column.is-offset-11-mobile {
    margin-left: 91.66667%;
  }
  .column.is-12-mobile {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 100%;
  }
  .column.is-offset-12-mobile {
    margin-left: 100%;
  }
}

@media screen and (min-width: 769px) {
  .column.is-narrow, .column.is-narrow-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
  }
  .column.is-full, .column.is-full-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 100%;
  }
  .column.is-three-quarters, .column.is-three-quarters-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 75%;
  }
  .column.is-two-thirds, .column.is-two-thirds-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 66.6666%;
  }
  .column.is-half, .column.is-half-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 50%;
  }
  .column.is-one-third, .column.is-one-third-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter, .column.is-one-quarter-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 25%;
  }
  .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {
    margin-left: 66.6666%;
  }
  .column.is-offset-half, .column.is-offset-half-tablet {
    margin-left: 50%;
  }
  .column.is-offset-one-third, .column.is-offset-one-third-tablet {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {
    margin-left: 25%;
  }
  .column.is-1, .column.is-1-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 8.33333%;
  }
  .column.is-offset-1, .column.is-offset-1-tablet {
    margin-left: 8.33333%;
  }
  .column.is-2, .column.is-2-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 16.66667%;
  }
  .column.is-offset-2, .column.is-offset-2-tablet {
    margin-left: 16.66667%;
  }
  .column.is-3, .column.is-3-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 25%;
  }
  .column.is-offset-3, .column.is-offset-3-tablet {
    margin-left: 25%;
  }
  .column.is-4, .column.is-4-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 33.33333%;
  }
  .column.is-offset-4, .column.is-offset-4-tablet {
    margin-left: 33.33333%;
  }
  .column.is-5, .column.is-5-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 41.66667%;
  }
  .column.is-offset-5, .column.is-offset-5-tablet {
    margin-left: 41.66667%;
  }
  .column.is-6, .column.is-6-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 50%;
  }
  .column.is-offset-6, .column.is-offset-6-tablet {
    margin-left: 50%;
  }
  .column.is-7, .column.is-7-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 58.33333%;
  }
  .column.is-offset-7, .column.is-offset-7-tablet {
    margin-left: 58.33333%;
  }
  .column.is-8, .column.is-8-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 66.66667%;
  }
  .column.is-offset-8, .column.is-offset-8-tablet {
    margin-left: 66.66667%;
  }
  .column.is-9, .column.is-9-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 75%;
  }
  .column.is-offset-9, .column.is-offset-9-tablet {
    margin-left: 75%;
  }
  .column.is-10, .column.is-10-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 83.33333%;
  }
  .column.is-offset-10, .column.is-offset-10-tablet {
    margin-left: 83.33333%;
  }
  .column.is-11, .column.is-11-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 91.66667%;
  }
  .column.is-offset-11, .column.is-offset-11-tablet {
    margin-left: 91.66667%;
  }
  .column.is-12, .column.is-12-tablet {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 100%;
  }
  .column.is-offset-12, .column.is-offset-12-tablet {
    margin-left: 100%;
  }
}

@media screen and (min-width: 980px) {
  .column.is-narrow-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
  }
  .column.is-full-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 100%;
  }
  .column.is-three-quarters-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 75%;
  }
  .column.is-two-thirds-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 66.6666%;
  }
  .column.is-half-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 50%;
  }
  .column.is-one-third-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 25%;
  }
  .column.is-offset-three-quarters-desktop {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-desktop {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-desktop {
    margin-left: 50%;
  }
  .column.is-offset-one-third-desktop {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-desktop {
    margin-left: 25%;
  }
  .column.is-1-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 8.33333%;
  }
  .column.is-offset-1-desktop {
    margin-left: 8.33333%;
  }
  .column.is-2-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 16.66667%;
  }
  .column.is-offset-2-desktop {
    margin-left: 16.66667%;
  }
  .column.is-3-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 25%;
  }
  .column.is-offset-3-desktop {
    margin-left: 25%;
  }
  .column.is-4-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 33.33333%;
  }
  .column.is-offset-4-desktop {
    margin-left: 33.33333%;
  }
  .column.is-5-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 41.66667%;
  }
  .column.is-offset-5-desktop {
    margin-left: 41.66667%;
  }
  .column.is-6-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 50%;
  }
  .column.is-offset-6-desktop {
    margin-left: 50%;
  }
  .column.is-7-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 58.33333%;
  }
  .column.is-offset-7-desktop {
    margin-left: 58.33333%;
  }
  .column.is-8-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 66.66667%;
  }
  .column.is-offset-8-desktop {
    margin-left: 66.66667%;
  }
  .column.is-9-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 75%;
  }
  .column.is-offset-9-desktop {
    margin-left: 75%;
  }
  .column.is-10-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 83.33333%;
  }
  .column.is-offset-10-desktop {
    margin-left: 83.33333%;
  }
  .column.is-11-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 91.66667%;
  }
  .column.is-offset-11-desktop {
    margin-left: 91.66667%;
  }
  .column.is-12-desktop {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 100%;
  }
  .column.is-offset-12-desktop {
    margin-left: 100%;
  }
}

@media screen and (min-width: 1180px) {
  .column.is-narrow-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
  }
  .column.is-full-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 100%;
  }
  .column.is-three-quarters-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 75%;
  }
  .column.is-two-thirds-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 66.6666%;
  }
  .column.is-half-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 50%;
  }
  .column.is-one-third-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 25%;
  }
  .column.is-offset-three-quarters-widescreen {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-widescreen {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-widescreen {
    margin-left: 50%;
  }
  .column.is-offset-one-third-widescreen {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-widescreen {
    margin-left: 25%;
  }
  .column.is-1-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 8.33333%;
  }
  .column.is-offset-1-widescreen {
    margin-left: 8.33333%;
  }
  .column.is-2-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 16.66667%;
  }
  .column.is-offset-2-widescreen {
    margin-left: 16.66667%;
  }
  .column.is-3-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 25%;
  }
  .column.is-offset-3-widescreen {
    margin-left: 25%;
  }
  .column.is-4-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 33.33333%;
  }
  .column.is-offset-4-widescreen {
    margin-left: 33.33333%;
  }
  .column.is-5-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 41.66667%;
  }
  .column.is-offset-5-widescreen {
    margin-left: 41.66667%;
  }
  .column.is-6-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 50%;
  }
  .column.is-offset-6-widescreen {
    margin-left: 50%;
  }
  .column.is-7-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 58.33333%;
  }
  .column.is-offset-7-widescreen {
    margin-left: 58.33333%;
  }
  .column.is-8-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 66.66667%;
  }
  .column.is-offset-8-widescreen {
    margin-left: 66.66667%;
  }
  .column.is-9-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 75%;
  }
  .column.is-offset-9-widescreen {
    margin-left: 75%;
  }
  .column.is-10-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 83.33333%;
  }
  .column.is-offset-10-widescreen {
    margin-left: 83.33333%;
  }
  .column.is-11-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 91.66667%;
  }
  .column.is-offset-11-widescreen {
    margin-left: 91.66667%;
  }
  .column.is-12-widescreen {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    width: 100%;
  }
  .column.is-offset-12-widescreen {
    margin-left: 100%;
  }
}

.columns {
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -10px;
}

.columns:last-child {
  margin-bottom: -10px;
}

.columns:not(:last-child) {
  margin-bottom: 10px;
}

.columns.is-centered {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.columns.is-gapless {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
}

.columns.is-gapless:last-child {
  margin-bottom: 0;
}

.columns.is-gapless:not(:last-child) {
  margin-bottom: 20px;
}

.columns.is-gapless > .column {
  margin: 0;
  padding: 0;
}

@media screen and (min-width: 769px) {
  .columns.is-grid {
    -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
  }
  .columns.is-grid > .column {
    -webkit-flex-basis: 33.3333%;
        -ms-flex-preferred-size: 33.3333%;
            flex-basis: 33.3333%;
    max-width: 33.3333%;
    padding: 10px;
    width: 33.3333%;
  }
  .columns.is-grid > .column + .column {
    margin-left: 0;
  }
}

.columns.is-mobile {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.columns.is-multiline {
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
}

.columns.is-vcentered {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
              -ms-grid-row-align: center;
          align-items: center;
}

/* FIXME: It is csjs bug, #42
@media screen and (min-width: 769px) {
  .columns:not(.is-desktop) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}
*/

@media screen and (min-width: 769px) {
  .columns {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

@media screen and (min-width: 769x) {
  .columns.is-desktop {
    display: block;
  }
}

@media screen and (min-width: 980px) {
  .columns.is-desktop {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

`;
