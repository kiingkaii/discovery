import React from 'react'

import { Helmet } from 'react-helmet'

import './first-page.css'

const FirstPage = (props) => {
  return (
    <div className="first-page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="first-page-first-page">
        <div className="first-page-section3shop-floor-accuracy">
          <img
            src="/playground_assets/rectangle21841-c0wt-500h.png"
            alt="Rectangle21841"
            className="first-page-rectangle2"
          />
          <span className="first-page-text">
            <span>
              Free from any rigid measurement setup requirements, the MetraSCAN
              3D is designed specifically for use on shop floors. It delivers
              accurate results, regardless of the measurement setup quality and
              user experience level. Thanks to the C-TrackTM optical tracker
              that enables dynamic referencing, the scanner, the part and the
              optical tracker can move during inspection and still provide
              accurate measurements.
            </span>
          </span>
          <img
            src="/playground_assets/rectangle31842-8m3s-300h.png"
            alt="Rectangle31842"
            className="first-page-rectangle3"
          />
          <span className="first-page-text02">
            <span>Impressive shop floor accuracy</span>
          </span>
          <span className="first-page-text04">
            <span className="first-page-text05">Accuracy ⇒</span>
            <span className="first-page-text06">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>• Up to 0.025 mm (0.0009 in)</span>
              <br></br>
              <span></span>
            </span>
            <span className="first-page-text12">
              Volumetric accuracy
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="first-page-text13">
              <span>⇒</span>
              <br></br>
              <span>• Up to 0.064 mm (0.0025 in)</span>
              <br></br>
              <span></span>
            </span>
            <span className="first-page-text19">
              Reliable acceptance tests ⇒
            </span>
            <span className="first-page-text20">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                • Based on VDI/VDE 2634 Part 3 standard ⇒
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>• ISO 17025 accredited laboratory</span>
              <br></br>
              <span></span>
            </span>
            <span className="first-page-text28">
              <span>Shop floor accuracy with dynamic referencing</span>
              <br></br>
              <span></span>
            </span>
            <span>
              <span>
                • Insensitive to environmental instabilities ⇒
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                • Measures all types of complex and highly detailed parts ⇒
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>• High resolution</span>
              <br></br>
              <span></span>
            </span>
          </span>
        </div>
        <div className="first-page-section2benefits">
          <img
            src="/playground_assets/rectangle11839-l3bc-300h.png"
            alt="Rectangle11839"
            className="first-page-rectangle1"
          />
          <span className="first-page-text40">
            <span>
              The MetraSCAN 3D optical CMM scanner is synonymous with speed,
              accuracy and versatility. As the perfect metrology solution for
              quality control, quality assurance, inspection and reverse
              engineering applications, the MetraSCAN 3D generates highly
              accurate dimensional data in any type of harsh production
              environment and with any type of component—regardless of part
              size, material, finish and complexity.
            </span>
          </span>
          <span className="first-page-text42">
            <span>
              This optical CMM scanner has been engineered to perform highly
              accurate and repeatable metrology-grade measurements and 3D
              geometrical surface inspections. When paired with the HandyPROBE,
              Creaform’s handheld optical coordinate measuring machine (PCMM)
              with probing capabilities, users can also harness the power of
              both 3D scanning and probing for complete, end-to-end inspection
              processes.
            </span>
          </span>
          <span className="first-page-text44">
            <span>Benefits</span>
          </span>
        </div>
        <div className="first-page-header">
          <img
            src="/playground_assets/background1817-5vcs-500h.png"
            alt="Background1817"
            className="first-page-background"
          />
          <img
            src="/playground_assets/metrascan1818-ap8j-300h.png"
            alt="MetraSCAN1818"
            className="first-page-metra-s-c-a-n"
          />
          <span className="first-page-text46">
            <span>Creaform</span>
          </span>
          <span className="first-page-text48">
            <span>
              <span>MetraSCAN 3D</span>
              <br></br>
              <span>Series</span>
            </span>
          </span>
          <span className="first-page-text53">
            <span>
              <span>Speed and accuracy combined with versatility.</span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                The MetraSCAN 3D optical CMM scanner line-up is specifically
                designed for manufacturing and metrology professionals who do
                not want to compromise on quality or efficiency. It can
                withstand any production environment, including shop floor
                vibrations, part movements and environmental instability—all
                while accelerating 3D measurement workflows.
              </span>
              <br></br>
              <span></span>
            </span>
          </span>
          <img
            src="/playground_assets/ctaexpand1830-qtz-200h.png"
            alt="CTAExpand1830"
            className="first-page-c-t-a-expand"
          />
          <img
            src="/playground_assets/biarrowsangleexpand1832-yvw6.svg"
            alt="biarrowsangleexpand1832"
            className="first-page-biarrowsangleexpand"
          />
          <span className="first-page-text62">
            <span>Expand</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default FirstPage
