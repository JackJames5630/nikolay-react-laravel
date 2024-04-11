import { css } from "styled-components";

const mixins = {
    alignCenter: css`
        display:flex;
        align-items:center;
    `,
    flexCenter: css`
        display:flex;
        justify-content:center;
        align-items:center;
    `,

    flexBetween: css`
        display:flex;
        justify-content:space-between;
        align-items:center;  
    `,
    WhiteButton: css`
        transition:.3s;
        color:var(--dark-gray);
        background:var(--dark-white);
        border-radius:var(--nav-border-radius);
        padding:10px 25px;
        cursor: pointer;
        border: none;
        font-weight:400;
        font-size:var(--fz-xs);
        z-index:1;
        &:before{
            color:var(--dark);
            margin-right: 5px;
            font-size: var(--fz-xxs);
            text-align: right;
        }
        &:hover{
            transform: translate(-4px, -4px);
            background:var(--dark);
            color:var(--gray);

        }
        &:target {
            background: var(--purple);
            color:var(--dark-white);
        }
    `,



    CardButton: css`
        color:var(--purple);
        background:var(--dark-white);
        border-radius:var(--nav-border-radius);
        padding:10px 25px;
        cursor: pointer;
        border: none;
        font-weight:400;
        font-size:var(--fz-xs);
        z-index:1;
        &:before{
            color:var(--dark);
            margin-right: 5px;
            font-size: var(--fz-xxs);
            text-align: right;
        }
        
    `,

    StyledCard: css`
         div{
                width:45px;
                height:45px;
                display:flex;
                justify-content:center;
                align-items:center;
                background: var(--purple);
                border-radius:50%;
                border:2px solid var(--white);
                border-left: 1px solid var(--purple);
                font-size:30px;
                // padding:10px;
                margin-left: -8px;

                a{
                    width:35px;
                    height:35px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    color:var(--purple);
                    background:var(--white);
                    border: 1px solid var(--purple);
                    border-radius:50%;
                    padding:10px;
                    transition:.3s;
                }
                

            }
            &:before{
                // color:var(--dark);
                // margin-right: 5px;
                // font-size: var(--fz-xxs);
                // text-align: right;
            }
            &:hover{
                color:var(--gray);
            }
            &:target {
                // background: var(--purple);
                // color:var(--dark-white);
            }
    `,
    darkButton: css`
        
        transition:.3s;
        color:var(--gray);
        background:var(--dark);
        border-radius:var(--nav-border-radius);
        padding:15px 25px;
        cursor: pointer;
        border: none;
        &:before{
            color:var(--white);
            margin-right: 5px;
            font-size: var(--fz-xxs);
            text-align: right;
        }
        &:hover{ 
            transform: translate(-4px, -4px);
            background:var(--gray);
            color:var(--dark);

        }
    `,
    purpleButton: css`
        transition:.3s;
        color:var(--dark-white);
        background:var(--purple);
        border-radius:var(--nav-border-radius);
        padding:10px 25px !important;
        cursor: pointer;
        border: none;
        &:before{
            color:var(--white);
            margin-right: 5px;
            font-size: var(--fz-xxs);
            text-align: right;
        }
        &:hover{
            transform: translate(-4px, -4px);
            background:var(--dark-gray);
            color:var(--dark-white);

        }
    `,

}

export default mixins;