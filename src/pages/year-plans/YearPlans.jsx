import React, { Fragment } from "react";
import { Accordion } from "react-bootstrap";
import Icon6Image from '../../assets/images/icon6.png'
import BannerImage from '../../assets/images/yearplan.jpg'
import HindiGrade from '../../assets/pdf/Hindi-Grade-I.pdf'
import MarathiPlan from '../../assets/pdf/Marathi-Year-Plan-Std-I1.pdf'
import HindiYearPlan from '../../assets/pdf/hindi-std-II-year-plan.pdf'
import MarathiIIYearPlan from '../../assets/pdf/Marathi-Std-II-Year-plan.pdf'
import MarathiYearPlanStdIII from '../../assets/pdf/Marathi-Year-Plan-Std-III.pdf'
import MarathiYearPlanStdIV from '../../assets/pdf/Marathi-Year-Plan-Std-IV.pdf'
import MarathiYearPlanStdV from '../../assets/pdf/Marathi-Year-Plan-Std-V.pdf'
import HindiYearPlanStdIII from '../../assets/pdf/Hindi-Year-Plan-Std-III-2022-23-1.pdf'
import HindiYearPlanStdIV from '../../assets/pdf/Hindi-Year-Plan-Std-IV-2022-23-1.pdf'
import HindiYearPlanStdV from '../../assets/pdf/Hindi-Year-Plan-Std-V.pdf'
import EvsYearPlanStdIII from '../../assets/pdf/EVS Year Plan - Std III - Science.pdf'
import MathsYearPlanStdIII from '../../assets/pdf/Maths year plan - Std III - Maths.pdf'


const YearPlans = () => {
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' />
            </div>
            <div className="">
                <div className="container custom_spacing">
                    <h3 className="text-center subheadingM mgBtmZero textPinkColor">Year Plans</h3>
                </div>
                <div className="container custom_spacing custom_spacing_top_zero">
                    <div className="row">
                        <div className="col-md-3 colorAccordion">
                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><img src={Icon6Image} className="small_icon_size" />Standard I</Accordion.Header>
                                    <Accordion.Body>
                                        <ul style={{ paddingLeft: '9px' }}>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6yoyVFGk5TUFn1aTx_D0beJdy1kb1IR2o1hSxkrS5tWYSqv62OaZRKxfrdZwjSdgf6KOiU27xv_bu/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Art  & Craft Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQvkr3xW91I18tBx2kV8_Pv1hybI8OpAY6JhBKsnhnWluD53sE8QplMnhJB_lcx5mZkx0EOz8U4_QeI/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>CCA Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRkzaiL4FrVXAyPM0xkalb76ukShzby1prlGnR_Z2FhJ3hnm3xinUvXVmYpYgUNizob086LDrxYkLS1/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Computer Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRxAouenEIgFnskjQyWwCO9KSaYkJFIJUflQZ8-8CpxTZ_92yYySLpDmlSJGbuEkKnB7g3FoZStVzE5/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Dance Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQSIoL6kTE8qgeaLRBPhJ2_RdOyD17ozvaQcjUOI2C0zaXcG7e4fttTqkGQYGdem6hbXb-SYIeJ8ppE/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>English Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_3epzxXr7lbTLNdV03G91lGSpB583-Bk-XcZh4xVQNGXPLIYVMvoKu_p4fHkbhDDz4n7Sn9vkRwpo/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>EVS Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6dXvxAXg7vgMncOv6qud_AHZjBHX5K_6lD3F0yU-CpN8CRYj0Wg-1eYoEIWJkiD8tLfqOjWGkup-I/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Games year plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRkdeFrBaoky8CprxheaAKyonAm4BvibjGApQkkAR3Z9lGQFlGXGuLwLt1xG83q8GKtlVqj9YZG0clB/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>GK Year Plan</li>
                                            </a>
                                            <a href={HindiGrade} target="_blank" rel="noopener noreferrer">
                                                <li>Hindi Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vROEMSv27-avXtCDUlmC7Xv_EtFJJri6Gh7z8-EvLdli2pS4Ij2OBHBoXtMeSZ6Dao6xgEIh2X4E1Tz/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Maths Year Plan</li>
                                            </a>
                                            <a href={MarathiPlan} target="_blank" rel="noopener noreferrer">
                                                <li>Marathi Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTHCYOiTyypVdlyHT4xX2xGYw43Uc0F07ce6y4ka0ZanfSxmqrpu9HusY1bvFUzCdr-QicVaKTnMqeU/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Music Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQQIrTKRKuOAYa0gHYpsui_CcKD97zTnzPtb0j8jl5-cZm2uQ4YmAzs3AxX4M3N0UIAnAiSFlgj0Esp/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Taekwondo Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR2Xmni_P1rri-Isa_1fwzUt3npKHjJkjRCSVm0QCQXGDQ71wrSvESuL9GOBSbHPNaVD8B2BWwlx01g/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>VE Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTLdumqQb76mMFGTGlIImd4RLwhxX2dDv0PHxIXeubFr_3LlUpwR07B6x6I8YZgwfVIIq5TuTDY-TgT/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Yoga Year Plan</li>
                                            </a>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><img src={Icon6Image} className="small_icon_size" />Standard V</Accordion.Header>
                                    <Accordion.Body>
                                        <ul style={{ paddingLeft: '9px' }}>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5O42dN_BVFPGZCFv59nACdmzXTU2B4ZTHOV-EFwcDmcKns2aDxCC8YZBGm2JWhS60g1sdJ54pWGr7/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Art  & Craft Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSA6pS2Sg-zzjsFumXgA4lyUQRrNHdMKzLlfotPU7v-MDzGBu0FRf0PkE1-WU8rdwHEMF7MDHZ25sir/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>CCA Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSMcLWt3PvVLIjgmaSwaDa9NNkAVvZSD7Wz_asyR3NJ2MHuZaJIH4rm47Gfi4D_ynyo8kDd_FZCqBp/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Computer Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR1ROiSi7S7xalZMYCmfiVXY7Z1RbaWhbkvLs0YQsiQ6gJFKpjzrdCNruC90ijIUy9TNX9AQLiaw1Ol/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Dance Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQPlaZi-k2A817I1bDK8a3dGB0HYXi1jc0Tx0NYC_EkaugWcSAbYjpwEd2KrVbJGSQXqaHAjIZP5tvf/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>English Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRCg6R-M6ewHQek3LLiAmE5KrEnCTmCRs19IAT8Zb5kHhKhb0qVOrHrb5oQoxqHfwo8JVb_UOkI6qKU/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>EVS Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTbcYThozHRHUHE2lZxH2_ublxmpVCE2p4r4ObOPkKN1q2EQa2x2SVhykgGZDjmZSP1Xwqa2bWHIH1e/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Games Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vROUstMrVd_FIgYH05XendypKAj-wLwhu_Y-LgTmadhP1MYp0d7XGRMujuABSa697EFSO2Q9SUw8K9l/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>GK Year Plan</li>
                                            </a>
                                            <a href={HindiYearPlanStdV} target="_blank" rel="noopener noreferrer">
                                                <li>Hindi Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQpG36MtptDno_UwTzsugS2R9PdjyVdP7JkzUeurEymBqXUzAv-lOVBI089XIbxY7TidnsXmBesKSs6/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Math Year Plan</li>
                                            </a>
                                            <a href={MarathiYearPlanStdV} target="_blank" rel="noopener noreferrer">
                                                <li>Marathi Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTh6cEruSXstcTshbh0bjrY6ZHsKyKzjLMhH9xY3T6RI-Y66OowRCtqSIXZVoc5Jg/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Western Music Year Plan(Morning Shift)</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRTsaxm4mZCGbAtpKP0ZcP9D7OeamtdOFqQSf1PVoFUrS-YCwh9BWgDfUz4QPBjtHUs1o8xpaVM100v/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Indian Music Year Plan(Afternoon Shift)</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSO07Dot09oPSJyeAicXV77zBmYLJHo0ZwWyjziop5JwHuzONPEBf-tJRkelzsgfHCMEaRfib_m6NqC/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Skating Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTHk2EsGGJ8L4UVXTG5HiJDru30vRBIGVboN_dEDZyInims5PoQyq0zFnQEfs1f3oFIPFWXW9a8TU5w/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Taekwondo Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS5Con70uLUx17EkZE2qG2hfYGZVyZ7AgCzLUH0RdB_DedSU-8ze6jR29k1SrHDZg/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>VE Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTdHQL8xLxWzOyZH5DWJuvbMZJ1NX4Ojq74sronsB1woX9oatAjMixjYPkzkzSPLW6Fo4tEaZAWkcL0/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Yoga Year Plan</li>
                                            </a>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><img src={Icon6Image} className="small_icon_size" />Standard IX</Accordion.Header>
                                    <Accordion.Body>
                                        <ul style={{ paddingLeft: '9px' }}>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vScEQGYRgyQMkZyI0uuvDyamXBKCldGJGL3XL2KdbyqlUm8-pu93rgyCF2NM7QxnYKkEGrF86d_4QxC/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Art & Work Education Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRPG5O4eBb14ItOeTpdIQkQMPQNYysmt-7idDoj-UHssCFKH3wjDLb5vhMa0qIhFDOISEl-hTw5NESX/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>English Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQCjFDBAAAmP9OkLNy7o-jc8jYQGiuXQMN3Puf1DV-iu-0b35xsCkOBQkNEXKjQo60D8mXcywq2QIZw/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>French Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Hindi-Year-Plan-Std-IX2.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Hindi Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSrP_iS5kC7a_mYXQIjqO4ZU5jor20mFSaBiibbg90tRvHCkdy4wdL4OCPdgOxJbJUM9Z9SnhzWGMyK/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>IT Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTl_fzzT_CCDO2LrqJJZVF8py1qBcOxr2eGoRsXD6lrcmDoIJ2LP1t-jQhXJDLZlCc9lUcoOxVA_wkI/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>AI Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Marathi-Year-Plan-Std-IV1.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Marathi Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRZAwVwPdI0cWQ6lndU8KCRsCtlAe8VAk3A0-Ig6jNEDfAd4grGU9xVe7WeZ27C8cEM4nOyxa3JtNR9/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Maths Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Sanskrit-Year-Plan-Std-IX.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Sanskrit Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTvwD-Wsiw84025rVeptdbnbyLrF_icYQzeTuReDZauxDVyK5Smd9P1Vz5m0dxZsr9vc_IfVb0FqsSe/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Science Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTHZ9vKK22u1qRG-CgapqQ7cOcbJDZHQyMK231igFId-tXuLP4DGEKPorZqAOylXidwEnHZgmpTY64Y/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>SST Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSLv_glJTesCsqiBpoxe_s0GpmC7UdxNm6V9GDGyGKdPHmB150oy4yI3ozKADKhtND2l9zcv8DNWkdX/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>PAT Year Plan</li>
                                            </a>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="col-md-3 colorAccordion">
                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><img src={Icon6Image} className="small_icon_size" />Standard II</Accordion.Header>
                                    <Accordion.Body>
                                        <ul style={{ paddingLeft: '9px' }}>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTb9Z7eBXN-BdRwdHmQ4IO4PY_Ro1_z5AhETSALabia2276ffA9gSPaEFBtPfvRxg/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Art  & Craft Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQvLtdyHyP79JnNMIC2XgABXtifKGhVga28OSEmxrImopd7UCFwl5-8sEXcznEsceCC180JcoXjYnQM/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>CCA Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTMlHFM6bfZIh7Zp22forF-iIukxtfNRrBAgbxk_mXh1AHEPfkTukrPWx-VLLboPg/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Computer Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSY8Hj8eC0RL4B_fhqtWuQ8Mp6ygl9a0O6VsqMNAAmaWiznD1smxABySQb57GJIzZC3X0BXCyLvsJOX/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Dance Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSY3UC-iAqRtcKVHJvWhIew59f12qrMWPt5rpp-NLDJJtgMHiTcDkYT-L_MH8hwkbOphGD4egLxe12u/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>English Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRCUBpegOlk8pZXyR759TiHctbEEgTKDYrDXOeXGP7AR120CcED-izfytDpTbkeD6p-ha9kDP_oD-Ey/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>EVS Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRv5eeXLF6kmxnVjJ4YKty-kncWCLfWzo1m-z1geqFc7Fj-lnGTfKGmLd1sHuwBp8Phob0ZBRuUsTtJ/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Games year plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTVeiKQHXE6SPJNmRvl2z3SC5ctYYvmUhB759e8DzbgZrOhpl2Nl356BkKRzP3JlLLZhSav2QwU8LT4/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>GK Year Plan</li>
                                            </a>
                                            <a href={HindiYearPlan} target="_blank" rel="noopener noreferrer">
                                                <li>Hindi Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTowAgqvtEcw5n3_U1lxhrtZQxsWgZEuVsnnD1kZoLpGIfsk94Zag5mp-iw2zAy-97WcT9tI-cPb2cA/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Maths Year Plan</li>
                                            </a>
                                            <a href={MarathiIIYearPlan} target="_blank" rel="noopener noreferrer">
                                                <li>Marathi Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS46V4E94e-BdT3cpLhHrkeUbH1KkHfqvfuHOh55nonGTqyifxJZ5q8SqvmHqlSESwf4ogj-zzhx6P1/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Music Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSv1Paiwb10D05w6HhL7vhAHvFIcIJ2VIIaBAmdQgH7Ftw1PwcYpw9611LyCwPnCYVRTKNcpMUQPTga/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Taekwondo Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQUi-cglgJF0mSqXa7LKxFeVPwaqaTNrAS9Z3qG3xS4Xjod5n1S7frUFpmAHYvBxSs7uTRuMUdIxRhW/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>VE Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSoKhbbWJeZQ2eqSDjGi9CcWJ8UCE-J2h1ddO3DjHClrETqVW9E0_fMs_IORbDaoLBmGHjsc1PtGf_c/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Yoga Year Plan</li>
                                            </a>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><img src={Icon6Image} className="small_icon_size" />Standard VI</Accordion.Header>
                                    <Accordion.Body>
                                        <ul style={{ paddingLeft: '9px' }}>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQshrVafbwvJ_FdheikPetWPsBOYHfWpVguC3k8oEryekQvUmPXQNwg9_IyA0Wk3UuAlCUo1j6y1hX3/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Art & Craft Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRFu0msCJrKK3G5hbj2LR22wVsqbWMTQRYsBCqyIY3Jaebop28fbIcTYYi3oi3pO8i_eLJoTz_DVGg0/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>CCA Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRmBpDgNzppuAuKYtZh51Ifjr_PIYIjppZl4xcQohBFkQq-iucahQDaO8X5D7IYehqp3NvmDiw-dFmb/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Computer Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR0CAbG2lRT1-hF5IityTS2rHF49shwc1J71pSobJGEtX1mCQqBy_9wXyZ3kQv-5Jg04VpIHVzGY9Gr/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>English Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRB0WmveuZ9qhKOM8yCU-IIHVEXgL36EBxDyrAotN3Za2p7gE9KE6vr-FV8PkYcT1dPCYD4lk4_VYA_/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>French Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Hindi-Year-Plan-Std-VI.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Hindi Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRwSpB9rbvS4XPNiS3Hz3ndKf0HIDm9Xzu0wrgcn0bPXvNWuhuMVm5kirH8RrE8pw7AsubwElMQ4uQp/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Math Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRghEKtO6TY9bZJNlrnTOMueI0s-PivpY5i4hx4UWLBv9wmNJFo41c21AiT_Qr7yBRt5u-rILhD0fO8/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Science Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5VBK-1yJdGDweuA-iXXAH_6tlDiUh6YQu7_gmVpIuRu5iIXHwagPXXMaCij2Huau93YH8uEYJDDvi/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>SST Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Sanskrit-Year-Plan-Std-VI.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Sanskrit Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Marathi3d-Lang-Year-Plan-Std-VI.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Marathi(3rd Lang) Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Marathi4th-Lang-Year-Plan-Std-VI.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Marathi (4th Lang) Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRYKGOzKjCkPsKbXYlHTPRsAJenk7LGq2N_--PKpZTCEgMR350LRNyg7Wuihpthw0jwbpm6TD6esz-H/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Work Education Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSIrBDNmIWm2K46EibbbyziC8XqkC1inq5juybHxcPbRITrOiF9vFFP5LjFB7Ae7tqEpIBHKMing6mS/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Yoga Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS3lDvV71STsi3ikzZim13exQyW73ysnVZZd1Lebb2lbKJp7uuuy0PO3maec5WAQcFRVFD2tAgWV7xO/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Games Year Plan</li>
                                            </a>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><img src={Icon6Image} className="small_icon_size" />Standard X</Accordion.Header>
                                    <Accordion.Body>
                                        <ul style={{ paddingLeft: '9px' }}>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT2kpx4k_usBqEguoiX_c7QneetTxLN2nR1JTPeLjtrZBbAvkAQmggvFr_xqk9bovyPbHnt5d8bWibF/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Art & Work Education Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5g4C1ynYgBWU5jcHAZUZqjSepIz86bHlMo5p-5UN5aHNBHqJ1LlYAh7-xRe8BikV2e2AFOdx4zlU6/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>English Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQzjIotiq4qmUUSqGR7vzL-XLg7RJXh7XdNOOHrOoiQVHPUAaVck_iPwiM-30Q5_C0NdnNL22eADHS-/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>French Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Hindi-Year-Plan-Std-X.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Hindi Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSRzdfhhgBQE_iAoV-X_JvB_7Q40ZtZyKtZvObJi4cW80xlBjAFMpFD6wQWWbi0QPQ3A2qIQ0ASgquv/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>IT Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRAW5vT9HtGp8xLgsgjQ9k8lzVdDfJiT18FrQQ-WO0BgRR7VYsLn1IHnzwKYxR_d3n8AYv2bxJr_Nh1/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>AI Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Marathi-Std-X.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Marathi Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8cMfaFJAHYPEfe94gIltQcHCGpzZGqs3gzLwNKGRg_M6j55GCHUNKbCPpbj6qzSb8at7fgA9iej2S/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Maths Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Sanskrit-Year-Plan-Std-X.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Sanskrit Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTtXBqaKl1H0LmsC4Vf12sM6S_I8Me4_7gLPo0U9MDIb-DvlHikCwHg1uWyEO75I6-mSppFat6dNMuL/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Science Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRbgYQgez_PgYlUxFH6IXhn9e_5iH8TUwyTg-rw2rUsmwqPWq-063r_YNme59xyphEGEPMBjQEAYJoP/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>SST Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQZLnSGFCzpDzOlvBRJi5V4VX0V0p2YBP3j8YmlcOwRSrn1XOaU4ineuaG8DAAHb_QsAZr4fS1gIrQ8/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>PAT Year Plan</li>
                                            </a>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="col-md-3 colorAccordion">
                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><img src={Icon6Image} className="small_icon_size" />Standard III</Accordion.Header>
                                    <Accordion.Body>
                                        <ul style={{ paddingLeft: '9px' }}>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ-yXbvzvPWygf2QSB93AiqHXA72HfjZHgMY7O3zZRYbx0piDprFySHUlziVHwMiG1fHW17Gq1weZq/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Art  & Craft Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRr5NYUaLkhj02Sl5FOG4dX5ly7OSaDUrwh6zA8rAwuQoEGokN22FgOyj9Tds4unaj7AoS3ZXAQi5mm/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>CCA Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTfR0XZ0aZ-dC_gSgjt9ymPhkUgvMk8Gr9piVBusbtiDmo6iEXAKQCPkRyTr78i9CMmrqf__EPlsaXa/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Computer Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRKkDvAkWUx1ejOaTIe__v-awdTOjj-QHNvl9srGXmDBcz6iVeqKwJQStHm8FCNzZu6CEsOeycgEF-0/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Dance Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSEX9bNUQ99Q7UiI0Jc9MB_JhXfTp9a5IlYGTWlPTpyXvkoAFs9TB0Co7TJEtWVBlB1_burIMEizTGk/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>English Year Plan</li>
                                            </a>

                                            <a href={EvsYearPlanStdIII} target="_blank" rel="noopener noreferrer">
                                                <li>Evs Year Plan</li>
                                            </a>

                                            <a href={MarathiYearPlanStdIII} target="_blank" rel="noopener noreferrer">
                                                <li>Marathi Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS5eIJZMEMT2HfceJ3t8wA2u737Obock9TIoTQ4H-JNSAefZ4nale-2Q0S4N6MTEQ/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Western Music Year Plan (Morning Shift)</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQqVR5kDye9WYGsgiG2PntsfvGWzlURzIAn8b18nKW1sd33ZcKSYsaMLAc5pVX48VzVjvUZKYbWdY9Z/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Indian Music Year Plan ( Afternoon Shift)</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTDQsHbv5cfElIWQI6LJN37WXBFgVVQDyuClVgIPq6YwUX_5sHmH7mqfk5_8e_Qz0naqn3r_FsTcGY1/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Taekwondo Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQYzJzXTUMJcI1QwOWWBot21fJikX02tHF6IbWpSOv8Qadnt5mq0JBK7EOs0QW2wiLRozYRzk_eT7ly/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Games year plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRPm2o0bL3-22MsdahDnWUOtiDd-v-d8tjf3fgmfS94TTlRfvokxToEGfapvgmPyIAqokbVwlCCAIbg/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>GK Year Plan</li>
                                            </a>
                                            <a href={HindiYearPlanStdIII} target="_blank" rel="noopener noreferrer">
                                                <li>Hindi Year Plan</li>
                                            </a>

                                            <a href={MathsYearPlanStdIII} target="_blank" rel="noopener noreferrer">
                                                <li>Maths Year Plan</li>
                                            </a>



                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQLqQXLTcVD2leL1SNfw4Xkjn2ERKhTbALnFafBbIa95zlFuh7T2_1GNTl3ZFvdvdxRZW2qOagRALVI/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>VE Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTL1tBqUTyIgx9JnEgzj7MfxJaxvreqe7sAj0ZMgVNt6buUx6aghjUl-sytkS9jTMQhM8_GGnf5xVtN/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Yoga Year Plan</li>
                                            </a>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><img src={Icon6Image} className="small_icon_size" />Standard VII</Accordion.Header>
                                    <Accordion.Body>
                                        <ul style={{ paddingLeft: '9px' }}>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS1ZTbwugZh8nePleIbKJDL6reke_NkoXY87Pyv00kYRxqphnw9RVr0kp30i9YfRCRcj5LZJTquApOo/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Art & Craft Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTOxynnCiBjOiUyEyiEBbCk20coPku4TYrRemJmGek7K09coFuzrinS_lhJD9jIOcCKWd7RQKP4d9Kz/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>CCA Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS6ea3dCaBa0QTmwIoHP9WJi2-XTl3c8yEfdaTFHEUiqS2RSbtFi3tImR3D0qs8xUKiGneYNbPubO2H/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Computers Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTQcxNPS3Gg4qcXeA2_otZhHoxTZxFd5C_xL_KJhh4zNL0CrwTMjEQiZX9nIJhSFFGjKVMeVrrSezJv/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>English Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Hindi-Year-Plan-Std-VII.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Hindi Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5KbhH9ljT6DoGRIFkQYBq_W96t2L5CoHvRJ-8ItpQINbSm-4l8GFaVwHBUkRTz0IuybJIqrpHKZb-/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>French Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9K6Z_R3OfJdiXh4N1nh9UWXWp3oM9UxfoaIXOQEfq3xm7BnbbJoIWlh8a0BJYSatsC_moRj2vY_L5/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Math Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Marathi3rd-Lang-Year-Plan-Std-VII.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Marathi (3rd lang) Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Marathi4th-Lang-Year-Plan-Std-VII.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Marathi (4th lang) Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRGAUCcZoqeHBqxWqAtb09IrXx3YUSECUgMMr1_KYQCZCEldtrUlcbpPpbfSKiGKRWy1OaxICHF4baH/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Science Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRwnk5hwwzvlIwExfvRSaBvRPwL9ZBimWfzBWnRRqimV-NhxfeFnMJmJI7VOdfpeWQuk6R0jEbW4hAb/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>SST Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Sanskrit-Year-Plan-Std-VII.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Sanskrit Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQjUJY-qM7u6mzbNWi_8axSURFWT2sPtqLc_fgrcZyMXUG7ufSJEIngp5toJKUpNofVCuLr6RijL1ZY/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Work Education Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS-0F5dvD6JfVy21Wilvp0Xoolt_bGhlIU-oznMu_4DL7LIQR8GQQMDitIXJD8ZTgGJl5nzGn9JwcmS/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Yoga Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS3MpBZH8uWmMotXVJD23QL2prEqbZScMGN_jqAhxNXxPAazacyH9FEHERHDRXWN0tFkHWUu9ueUyV5/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Games Year Plan</li>
                                            </a>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><img src={Icon6Image} className="small_icon_size" />Standard XI</Accordion.Header>
                                    <Accordion.Body>
                                        <ul style={{ paddingLeft: '9px' }}>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTFFoagLVwYYeXH6A2MgTqayATUqsQl2Mu4zNIlfjjI3MDWysW8LApWplHeRfeJucgpDQWx-FU5Rz3v/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Accountancy Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRdAp2G4yGHsCRNPmuCofXcgK3YjeS2hwb8qyMdBEsxsP8b9YpHGQKmkPwEqw2x8e7YQLwRGv7SGhv1/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Artificial Intelligence Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2zgtlrjNuqYGlkzSzZFNC6aaVxP8ZKatqWe2dOqJ1tM0OhDWySj81IKJHiz9GN3FUhrzQ59_3_JTr/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Applied Maths Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRQ1F-9S5rfjcKAtLnbAuRNb_e_p40LqqOMgJ0xg7PVOLvrrgpqUJGGJawC2WULPJROI7YAiUjRTYC/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Biology Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSmWo38w3DtnosOUH3I4T4d7GgCzmnF1rpjZ2E8A_8-b31IKUXHTSl0w9oBjaFyzmEYIJLOpYWuc16y/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Bsn.Std. Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_rgH61O_CvPeXtbVy90pLRy5l-LKOUa4akc_NvDjeB0YJznG_ENAVrWUXHfoGht8M_WutrcI4NZcN/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Business Administration Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTt6m0AwaC1TICUDPPol3CT920rbV_lFrVB9xOuaox7ry0KfwTpPaP-7omsN908Ddy4RRR_7PhEckxu/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Chemistry Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTH27YJ5NIStmZ2dBCap8I5eXQLl8wd4IUOLNkXVDnbTbwob17mC9MAN2CJ01d1LOOfW5JnzUPRb9NI/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Economics Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS-sT8kvvStrBNJBe0N9R7OZnNiqP7gzz7JGv9Cd9NHyACUJrM5LYdr9tjzygcpu1bMuOkclS_BWanX/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>English Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSBrttwmvFXKfJSwRCYmEzmmqTSkQvbj30Fuq-kUGx6JkPuWTCsLj4YU_5B1k-v8D1CLPfhfIfx7E2M/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>IP Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSHBaqPgXc9IHRMWt-U_wa672pzochrXq0SXH81CJ3B-Q7ifaEqs8EOWljYExzZH6wyqbhXq-bvBgVp/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>IT Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSD6wi3yrVC6pphNcKbilG0B6oTe7wkuweTSdSQM0GLQw3YexB8mV2buigmq7Dt_rg2bgIvM7WjUbgG/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Maths Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR8056HLK7mUvn95dTRP0TqtxXiy_7ZLDCUysg5jlRWEJ9NSDgn3_yeEW-9y0hTgzq0JOzxKY4rrQJP/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Music Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQGZIXHUtf9PTwgu8FXhToZj1_ZTi4hsyvUdYy1BGnnl5QR8tshuPFLdYnNnu8vD53Qn6F0BxD9TKDx/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Physics Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQplYcyMixv_UY7WxFCLF0jrid_cgX4Beo-Q5AgnBqbOZisP4ft_3vYEJzerKOrINoAbl_wkQYPmvi7/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Physical Education Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLRO0tVTzHE_fPOXPEGu6ol3R-MXIdW2oMKPckb-ZWCseOorwYAJRSXYVc3eGw6KWIVmai3MumXhN3/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Psychology Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQS3Q2sGdDQNTv4qBV1iT1JwvdwMmLIY6Gpvhzq4_F1hLha9ZAa1BgrAPOvQySRbk8Ekj_qX69JkBa/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Political Science Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSZ8Ojj4k1JBde5NSl4GfHQnvIeG_Ay1T_kY1kgowwl9m-Y_WO6CgaQllxaofP104DUPQ_7apjHt7LT/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Sociology Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRbahyN2Peb2h9C0oHD9JCLSK95SleAgLgJ2aHK3FIQCf6Shtkspz_3P3kmnPNF6qqCRf57nhhVPS1w/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Yoga Year Plan</li>
                                            </a>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="col-md-3 colorAccordion">
                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><img src={Icon6Image} className="small_icon_size" />Standard IV</Accordion.Header>
                                    <Accordion.Body>
                                        <ul style={{ paddingLeft: '9px' }}>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTEVEo6nKbCoImaxa-oUux1Yo3jLEX7H9f4C9hpRXBv0esS40n2B1xNiJwrPgqPBd0I7Zo0atTGMWEi/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Art  & Craft Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQb4uKGFlZkki4y-Nn4GNdfGlKH0BQ6869Ew5MKW6hqEzseYLYhSNP7gtfTcYCSdQL4VLzO79bUglV2/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>CCA Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRWHWz_WXpS-pkHjlmsjcXSOZUCEd-Yy7DxQvy_ZQWfCk6jQcl2TZy5Bvjt4fi2JM_dTIkoTyYFGHbB/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Computer Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTdJQ_jSXmAGVk_IlTlLK9ufkxqplya473rteQAGcT52TNA-GpxOYS2COnzX4Rj1pbZrgcMXKsFyj6G/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Dance Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTiJt4uJXL7X--7iWZCIcFGGz_CVq8TbD-8XSgzBlb813RRagGsPb-pV9hoZVP066u6sB4a3KLk6rfO/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>English Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQZ_iU_XtMHPTfj0nWr_kJDX7TsyTjQHkxQVOyckB7Grxixr3abYijPgtNpu2LVG35twKX_TK2hpGf3/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>EVS Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQDMYb33lDRx7bDyV37aM_h8f4QSZ-0gPBgIj8eP4nuC99m3T8uVhqaywsJtP8_mJYYwIuA_ufQ0JzX/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Games Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTGrC6imR_jgTXPMAK1N9SGPXdH414D5y1Odns26VA2c8margA4-myAI4bzX8UAhharCasgr5gTR6Hl/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>GK Year Plan</li>
                                            </a>
                                            <a href={HindiYearPlanStdIV} target="_blank" rel="noopener noreferrer">
                                                <li>Hindi Year Plan</li>
                                            </a>
                                            <a href={MarathiYearPlanStdIV} target="_blank" rel="noopener noreferrer">
                                                <li>Marathi Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTCQULOuO6QP5jQkYID7uD_EUzgjmxQbYu8d46MJLwdgMF4TvTjL_5N1IFTnmnD8oK3cfdtqlnViD60/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Math Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTPVLbJ6Uv5IOZfNmw7AWrmOZOwWfl0Mjayk5BxWzwQJzVLztgjSRPJqesW5xyc5w/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Western Music Year Plan (Morning Shift)</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQE4Qlm-F0SmM0KOxeX6M6Zrz2Fztb2cgwgjSr-PEZgqScNuL5QT4aVVKu0Se9G0uDRCnuohysmJE8R/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Indian Music Year Plan(Afternoon Shift)</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRZoWt1Frxwmmss_BQSQ9hqjblpdbMHrYtYQ6-Y4OtIG9wCZGSskrFPRLZfXKy9T6BaIjKTYIAjJ9T8/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Skating Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQo4WXehykXFXmf-xFyLc7yKBQoqu5i5YJs-o1n2LMGXOy8t_XYIXBeL3Y0rUTwPL4JTYMVJCkdoDOR/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Taekwondo Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRFgP0mb4xfKqLfZIEC0Jl1fx38uO9uL4pFl9F9NYu6j__wEHh43LJHTjZaDna1a_rEpkgDQgIzfe2R/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>VE Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8gWDlvJ4DCmgSTX3C9bqgbeqragccL6QO4zctgp2D4QDWHyg8DWR2sodQC79yzNx1uhpe0B3dxsjb/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Yoga Year Plan</li>
                                            </a>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><img src={Icon6Image} className="small_icon_size" />Standard VIII</Accordion.Header>
                                    <Accordion.Body>
                                        <ul style={{ paddingLeft: '9px' }}>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRyhl5jUmSblEmiqeCQ_A_UsJAAqD_xQMjSIsbAJLe5dtf5TtOUl5bguc4l1I2PB_fYg8yycgQOCD9W/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Art & Craft Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTOWAlijuamSnidp6M35n7ShG99SkG5aPkb2ngRbB5R-HRE59iwbJOtWX18AnSFU8YxJcmLWACj4Gxp/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>CCA Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTYSB97j348fB5A5eE1kLJ6rNXwxa9LkLr_-6s10tkjuCRJsemd6eqZAjzp4xuBZJXDQubKe3lttmWg/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Computers Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTVCj9kiWXjdHM2g0TaNeOweEg_RQtBvUGQjlobIdIb2XnuZxszZpphEm_muVwYpKZImb64SAY8LyRp/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>English Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQn7iGwRTEkPWkSFQ5vjd-BOcTq-AwFoysPFM0v8n6iKGQxXjpfDhucYVFJEDSfddhjDlPrBMQbuY8N/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>French Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Hindi-Year-Plan-Std-VIII1.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Hindi Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM8v4f8DG5FYghtv9CZMNTS8vVEZTPEuOoeLih-O0_hMC9g6GMViR3OOG8TisOMZorh8_s7QIVXpYn/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Math Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Marathi3rd-Lang-Year-Plan-Std-VIII1.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Marathi (3rd lang) Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Marathi4th-Lang-Year-Plan-Std-VIII.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Marathi (4th lang ) Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ98yMkWZGLnlC5gRpUlFzmVvN1nsUGHb9AlRJJpn7_jYE-Oqr3XhdcrPp7gQOmqs1GmT9Shfa7vmwh/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Science Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQc6Yb5rmhNlCZ-DGLs9KA6EyrB9iVR3339j822QMhdhOHVnnrzPO-O2JcISIlEhU10M72eGj-gcaPq/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>SST Year Plan</li>
                                            </a>
                                            <a href="http://indiranationalschool.ac.in/wp-content/uploads/2022/03/Sanskrit-Year-Plan-Std-VIII.pdf" target="_blank" rel="noopener noreferrer">
                                                <li>Sanskrit Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6r3vtT1cY0E25j8fde6JAiG2Kdn__-CxhvNr81eh3B4eciqrMg-jluBpgxmFaLwDIDkQ-sC9jnPEX/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Work Education Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQWKYOLuA8mndWKVqNVGuBubMWk0ungFeSKT473yrfSlNDrLbmaKQL5IsY4VulGISLDyHNmfsrMAFfX/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Yoga Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQPuthV5clniwAs-5ybA85td9V9Wi80fkHMJjcs_I3AkJFc3gjPenWfczt3iCrFhwDrSHRaPsKs6jVs/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Games Year Plan</li>
                                            </a>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><img src={Icon6Image} className="small_icon_size" />Standard XII</Accordion.Header>
                                    <Accordion.Body>
                                        <ul style={{ paddingLeft: '9px' }}>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQzN23rh6-yG9Lk0JbeQ8nzedQmQli7Z7f9w_x4CNwlNQwU4Vx-mTiApXwQgSB-d7ivkx2d6iex81wY/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Accountancy Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_eiU_P3zOgbsjn4j-j4ZnCR40FmlxVePTqoC_z5ox4gHBS8_B7Or99rJ0vjfHHU5E_ig-nRB8oXmD/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Artificial Intelligence Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSbCVJx0U_OaSaGqYBdHDUPlP0V7AxuZnyxPSivHq41c9Qt5AJTJ18qbhFZpR9nu3Xsdrfl4_I7VkSg/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Applied Maths Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQRbL-8jcAaz0iW7pghX6LfizPafeHatN6BLDTnZ0EXIGnNeXHZ7TxaoJGlKyKkhv8eg4k3RFcYKFXd/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Biology Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTwZsH9daDe3aK_7pQcxhv9FvRSG1jTqceTl9fPMcw1_SmbDphWoJayo_nMuPNPUCXGvnKerqSsTQU7/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Bsn. Std. Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSn9eZnlHp1bsCBg10SEqVaChqPXxlUny0aIOAvXukbA4PUYDaQNocLyfD33i0MOe6BQLVo567S8pcE/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Business Administration Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRkGAU52eNIzSvv4GyDpiHmFD9vTmKnGoqZuOgbyZxPdx8KbHMnBx93jTUDe1qt6E5tqS2H_MJo2tHO/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Chemistry Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS_OcZwMzV3JKYBozw_0W1_oFTqXUv24ZAV7UWObxhvw0mHbQhaiMBqlrA-XXRwNdBUqWA4X8ZTMF6E/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Economics Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQlSmCf-7eRJZGPaym2vX9J3xZKKK6NtDuW7KtywEJ-BkNYbFyTp08m0TdPEQXIPRXnfqp69xm7wOkv/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>English Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQQp7q4-xix-jVnZwlJAtxnPvHn_P8hwhVdnN5YeBvk8pnwK_n0c5uVGSfmOXnWKqRei3YHoqh21dgb/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>IP Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSMKogjzQeLGOFFfOc0tp9HdcPaPh4ytf-Jm5jk77sShPYc4HzIJh_l8Y6ERUfpyeGlGhJyJHGxudQC/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>IT Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTQSxIuMyGB_pVIWYd_vPV__iYkDana4lZgFlvceiSoQsjkLbg2CGNsyO8PJ3sGYqY1mL9AGIb4cH3t/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Maths Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6Hn5U006cI1lTnUEqCvFKkv96Z3EBF4hA4AsT9CNSa6c_xCKz2CvD-5_ABEP5s4RQn5fXnteenHci/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Music Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQRiH4EEWIEjgROUOhmbSqMuV1l4PTZcWy5l7UW6X8mB0kx0LM0LKzh9yigWPsJeFuNJtzDY0Iz6tbY/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Physics Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQx9WnMyiRD2nR0ZZBrfnowkBrRpBVh5kPGbzsyGlMRAOUuIQqivwCMGzdmZ-6DtJV9zFIYs94OQr73/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Physical Education Year Plan</li>
                                            </a>
                                            <a href="https://drive.google.com/file/d/1Ae565nXOIHK64bdoO1W4cZ6gR_Ye_ZI_/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                                <li>Political Science Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRxN2tONF3XoLXctIJSexE8TP3UeL9YLaxQfoczthTlOwJTp7hXRkxoI5-BDLvY0Nx088jp4GXMFtNZ/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Psychology Year Plan</li>
                                            </a>
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                <li>Sociology Year Plan</li>
                                            </a>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSe7N9NOvC7SMMbm7416H632u2MEU3Z2J8Y_ObqBbnrYiFB9_AKSwcEXcJRmV8RBTmZP2DYNXeqBrRw/pubhtml" target="_blank" rel="noopener noreferrer">
                                                <li>Yoga Year Plan</li>
                                            </a>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default YearPlans