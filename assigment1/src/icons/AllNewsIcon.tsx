type AllNewIconProps={
    size: string,
    color: string
}

function AllNewsIcon({size, color}: AllNewIconProps){
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 25 24" fill="none">
    <path d="M20.0006 20.5714H5.00056C4.28901 20.5715 3.60442 20.2993 3.08722 19.8106C2.57002 19.3219 2.25941 18.6539 2.21913 17.9434L2.21484 17.7857V5.35716C2.21478 4.86848 2.40024 4.398 2.73373 4.0408C3.06722 3.6836 3.52388 3.46632 4.01142 3.43287L4.14342 3.42859H17.4291C17.9178 3.42853 18.3883 3.61398 18.7455 3.94748C19.1027 4.28097 19.32 4.73763 19.3534 5.22516L19.3577 5.35716V6.00002H20.8577C21.3464 5.99996 21.8169 6.18541 22.1741 6.51891C22.5313 6.8524 22.7485 7.30906 22.782 7.79659L22.7863 7.92859V17.7857C22.7863 18.4973 22.5141 19.1819 22.0254 19.6991C21.5367 20.2163 20.8687 20.5269 20.1583 20.5672L20.0006 20.5714ZM5.00056 19.2857H20.0006C20.3771 19.2857 20.7399 19.144 21.0169 18.8888C21.2938 18.6336 21.4646 18.2836 21.4954 17.9083L21.5006 17.7857V7.92859C21.5006 7.77324 21.4443 7.62315 21.3422 7.50608C21.2401 7.389 21.099 7.31286 20.9451 7.29173L20.8577 7.28573H19.3577V16.5C19.3577 16.6554 19.3014 16.8055 19.1993 16.9225C19.0972 17.0396 18.9562 17.1157 18.8023 17.1369L18.7148 17.1429C18.5595 17.1429 18.4094 17.0866 18.2923 16.9845C18.1753 16.8824 18.0991 16.7413 18.078 16.5874L18.072 16.5V5.35716C18.072 5.20181 18.0157 5.05172 17.9136 4.93465C17.8115 4.81757 17.6705 4.74143 17.5166 4.7203L17.4291 4.7143H4.14342C3.98807 4.71431 3.83798 4.77057 3.7209 4.87268C3.60383 4.97478 3.52769 5.11583 3.50656 5.26973L3.50056 5.35716V17.7857C3.50057 18.1622 3.64213 18.5249 3.89714 18.8018C4.15215 19.0787 4.50196 19.2496 4.87713 19.2806L5.00056 19.2857ZM9.28284 11.1463C9.87427 11.1463 10.3543 11.6263 10.3543 12.2177V15.2143C10.3543 15.8057 9.87427 16.2857 9.28284 16.2857H6.28627C5.69484 16.2857 5.21484 15.8057 5.21484 15.2143V12.2177C5.21484 11.6263 5.69484 11.1463 6.28627 11.1463H9.28284ZM12.7148 15H15.7114C15.8743 15.0001 16.0311 15.0619 16.1501 15.1731C16.2691 15.2843 16.3415 15.4366 16.3526 15.5991C16.3637 15.7616 16.3127 15.9222 16.2099 16.0486C16.1071 16.1749
     15.9602 16.2575 15.7988 16.2797L15.7114 16.2857H12.7148C12.552 16.2857 12.3952 16.2238 12.2762 16.1126C12.1572 16.0014 12.0848 15.8492 12.0737 15.6867C12.0626 15.5242 12.1136 15.3635 12.2164 15.2372C12.3191 15.1108 12.4661 15.0282 12.6274 15.006L12.7148 15ZM9.06942 12.432H6.50056V15H9.06942V12.432ZM12.7148 11.1463H15.7114C15.8743 11.1464 16.0311 11.2082 16.1501 11.3194C16.2691 11.4306 16.3415 11.5828 16.3526 11.7453C16.3637 11.9078 16.3127 12.0685 16.2099 12.1948C16.1071 12.3212 15.9602 12.4038 15.7988 12.426L15.7114 12.432H12.7148C12.5508 12.4337 12.3923 12.3726 12.2719 12.2612C12.1514 12.1498 12.0781 11.9966 12.0669 11.833C12.0558 11.6693 12.1076 11.5076 12.2118 11.3809C12.316 11.2542 12.4647 11.1721 12.6274 11.1514L12.7148 11.1463ZM5.85427 7.28316H15.7114C15.8743 7.28321 16.0311 7.34508 16.1501 7.45628C16.2691 7.56748 16.3415 7.7197 16.3526 7.8822C16.3637 8.0447 16.3127 8.20535 16.2099 8.3317C16.1071 8.45805 15.9602 8.54067 15.7988 8.56287L15.7114 8.56887H5.85427C5.69147 8.56861 5.53483 8.50658 5.41598 8.39532C5.29713 8.28406 5.22492 8.13184 5.21393 7.96941C5.20294 7.80697 5.25399 7.64642 5.35677 7.52016C5.45956 7.39391 5.60642 7.31135 5.7677 7.28916L5.85427 7.28316Z" fill={color}/>
    </svg>
}
export default AllNewsIcon;