import React, {Component } from 'react';
import {
    Row, 
    Col, 
} from 'reactstrap';

export default class StackSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
                slides : {
                    stack : []
                },
                slideIndex : {
                    stack : 0
                },
            }
    }

    componentDidMount() {
        this.getStackSlides();
    }
    
    getStackSlides() {
        let slides = this.state.slides;
        slides.stack = [
            <Row key={0} className="no-gutters">
                <Col className="visible"><img style={{width:175,height:160}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAADuCAMAAACUPcKYAAAAn1BMVEX///9TnkNSoEH0+fNpqlxUoENQoj+axpHi7d9cqUxTnUPE3MBRoUBQnj9SoUH8/ftOoTtwtWLe7Nvx9/Cny5/q8+i00q6lzZxlrFbP48vV5tLs8+pXp0bg7d14tGx0s2e717WGvHtfpFGx06por1mSwomBuXZJmzehyplInTSkyZ3J4MVgqlCMwILS5s+Zw5FxrWZ9snJlp1dTqUCQvYjx9Om9AAARZElEQVR4nO1diXKjuBaNAclgi8VmCcaEpTFgN5B0Z/L/3/Ygu0G6BuwguuqdqemqmU5sHdBy7qJ77+5+HLpZ3Ge/0GKxCtNIFn/+C38cYpGWhkFqSouFgHMti2TeQ7oWXqUQYbFafACpWhj90+/KPLpk0YbqZ4+8BzYaYqIYHUYNiBHbOu/RjYFeZLlApVTPQOOQ2LwHOBzbtOxOu0+sBD+IeA9xIEyrfNvq2FD9eMt7mANgRgfjAqPXZYWX/8oE1L0YsxZSa1nlh2jPe7h9IC/dS9PuC5qfrXkP+CLEpMS9Gb2xquYtLMR12GchnQMr1oxZeanP3r9XzL8R8GzlkmkdgIVEDI39qup9fY5ySU9crLIHrcTHzGf//YJo1dz2dXGXndj7t6C97m7rQGP+zAoZpTMrVt5SYS6kFcKS83YK2c4BI9a6WgkkW89G2YoJdCJhI91/DFW3KwNQgaqSzkMuidEz3aJ4H2ZL1XmxAiwr7C/5Cwt9GwMbmoCDoj2d9HVIoGXlRiYXJp94OLqAbMB0K8lOoF8SSMxVLiXPPnu3I6dUpq95Xa5OwLLSlJTXDigWksFmpCqg12GXAU9jgck9l2W1rXzC1DtCHlyQO2IUMk37+veNcD25XLKtQw4spNK6PHvko4LZr6rW6xPLpSgEpo5mVNs+hye8Zy5I+TLdBNS9EBJCStD/ARcB8GyQgZKJWEFCqF5IoTPkfDGdkG3or+rzbYplZSYH6ETyj0O3YftIgH2dKC8/LZdqEQBYDI17a7gK1b0MsFLqZXX8yVelbwNAgqp+UIz84PUf9pOq5ZLyc2awbLH9J41FccWC3icbthXSyKWObLwJ9KTWnsyvxcbxOkeJfASmACJlens/jL4LgIUk+IF39Vc8BgRaVq51W72uP1QY2L/rHfcWU0OPAsCBKxibW+7rNmTIIuz2EEI9v8iCrBBC0utnwzsiwDeyIEY6Yv9mQd9WOVsuIeLeJmrggRPCD2+tNB8hKYlwmVw9AbdLjS2e64UU3X6P1Wu5BJjBRlBcxWrvHNgvCfWyKMZAthTIo+tfI5cKyHVKeloUYwBbIYgcrHGvSn8IINPcD3Y3JnKOHSQsEVbGTHr5HjEX0gqR8PqlegEiqFsEI94NZCU6wAciok0SMZKPGiiXlg9DPs2LISFkBN40fm3dC06QQ3ST9B6HDAmhKyyKMVhDMlM13H6izE4UwKIgm2Ra16+ZbIBlpeXp5TlT60i2N3tBtOP0gYftEkHLyr2/sLa30ELSTpuJFtI5dO8AnioStK/LSwwIIZ4ZQhEQC6mXVcja100H8AjVFgXXTC4bTGAiOKXu60UMWRTa7UyXcdC9FNiNEZGsjjdETBXgJDDCR/6RVn0XAsuqa/VsN+z4pVALIT4sOkhC0Do9O4I9CbOFUDmj1Bn5N+SO860vUg8Sc94RPMa1+nOorRDMHKzgW58/J7EWn4r//Iyz8Aroa4npikbGh25bMtaSQKT+InFCiJbEOq0E9+3A2ZXUGVqb5hyEUD9sj6zTCh+btyCm1JlHTtmsFtI59G1AD+uph+Y9eLTXpOJwPrk/VOhRSF1Wef2i9Pu8O+3IYWKLYgzMhJYvKBzMOzHsbI0ELTkLoZ7wKFYIyr07W2txFU7BUO8FN4i7brTcSO6K1tQTJIf3SAfBaesFLbtzzg8nLeWfazYMdnr+ptCvO8v4rvRQOdcjiY1te+O+W55ZtoI006RoAKIk/J/TP4C5cNJN2SvWUeS8I4rWu61tjjpD5sBJfEyWfyXJLRX/C4pSutKfv0urGOzJ4cxJ3BeplJ8MTFS1I2tUpBJsnE5lnGyHvLFbc9J3zjfs4F+W1+khx41uYfqK679Azc3k4LjrfU7emlOiYPIF/zfweL3foUaEfjeJkIaVLOnpBrkxp/25A00tmUH4bVVqQJYKBap/6Je+fGNOD61V4TMyw+WlMez22iuQ4fcJgt+Yk9yaSwqVkx5BSV8AVoIRXM6f58HJfIIuPl0A8S+G2DlwkjMgNfQyELl02Wt6TtsNkETeC0YIb4CTc5KvprRY4BA8q6bmZGfXU6rfVAWNamJOYnoLSh+eyHlwckBKCAkfQAg+vlgH3/ScZJfu1l4hpBEjJ0gplfJQ/1tqQm5grabGOMY0ib2kpuW0pL+mmg4KUysqPLmG3fzh7dbOMn5GJ6PtmnsHPs6Dk027TaT6ZZZ4jG8xd1ZA14WIMDf0STkdjc5MQiS0Lvh4a/1OicSs8NMcOO3D9gNfCeR3DwPiIaGUclE3rCywKTkVSmdcSr9gib49dFeiH82A0+/2wxYOvUMLZtx5U2rFCLVMyMmM21NPi/p/8r5DSnAZLuIJOclh66u0YIirSy5bv44I49ydkFPHjW0MC5g4p9aLwkv6M5mQU9GSO4gMjJi07S4t5M4pag1JcAd6WYuWpEAafZPgyEmTBnLaB+ebTBPV/Nc53VmtTzCiuXESpIGU7nbu2QesjPu5cUJoqCu+NflWOOXNad1OXjAGl7p4OSt8sMIVb06PSouTFg59UdF/qoo+oKqniDenrdu2nvDgskxWuPlCaNF/aEJOdtCx7UgwtH6Mvf0C64FMyEl86dqrqpI5N09WmNLWcGg5nrXpHlq7cYHbGXB6PD9ePqEZBgqPkSfvxZtQm5KT/pfh/F8tBA3nyiFLrWjn2ddGkCf1sURta+EMSFBV4peHP39frKh4GM9sWv8eO8X7G7WaGfZ9tHrOlklhi/rg+Tgtpx3DAUmjJgjYMHLiBmmy2w6aj9Ny0o+DQgCrxoNOSK6VQeqsGXW5eHO6248J1aBmpWmK9Nfqd/Fl8vhTMDpY0yS1/EqLy0fZ5HFCOxuRRPCOVVNsf5NcSnOfPp5rL332tc3LQBo+PMG30DnE3XXHB2pD9oBAyiPkcuKS82GmJXDDsQ/ACkdcONXSb3nI+59VFAjGkmmlcOJ0J25/S/n43aJxhDENSl6cmmzRXaVgDJUwgoFjxqLix+mV16MVS6WvvnoZBpMyYvrY+HJqaMm76CkOS0Iw0erfRotV350eGXSHBHdOr7xMeVs4y4ZZnhsGJkK/9EukUMOfs+D0zkzXRduLkmMVPC+Q7zd5vzCnFX6hSYoZcTob1kMRWS9/w4OiqSrw0kqaopgpp/fByd46eQpKggVGPguhJRHPmtPbCO2H9XJj0G+2CwHlkJo/p1fo3lGiJZwihRKC+kc43TWJwbSKzDmlmsC/w6kpVuZq7WWF0+6CmoyTGFlfSEZeuvRQ+00RSpx6Kk777D/8HYyQxCUUbdkrlPw4Of6isb0//iGbcS9KrzrBxq7JMRWnVnhZUEZey45awUaEups5J04oHxmh8ZT5cGrHaYyRFV3aCT48OUX+2f9f4fhGnAR+nNatfETh17i4RXfudY3dqTg9Hs6/ZuGPK3BXtL6A514uhy1OhCIALkO3WhUGaLlhU3ES/7YVqDumNq4etPYaUnHURk/tIlAkHbGivHYuDFcNG7XjGWhINuwH2qEeRCiG7mSc9h1nFzIGF5S12o52YcPVJuzeuBPKYaV49KhT0Yc6gafjtD61B7QSyt8DUmJFq525zMibn46TSAm6I7j05Bl2gd+9ER/SfOYccxJfoRlS8nAxnCnaEbXpBd0Mm5DTPqCmsQi5EltrZvaKLsq7aCkRWjkwoaRO3Sn9ES0d+/UdqqocgurJiqJit90+7BvI2+1jETm/X+KwZF31P9HF/aT5Rik75tlkr5DXShir1a9XrEpF8X1CKyzxDsK4GzGp38h8vnyDGr1dlHzNDoV/Ujvwv4Ny11T2uy6MezayMmIMYmL/XnTF7f0WThZrt5zaZ7kub0NKmMu9zwY796qqBG9YaSXgz5jet/wYXBNufwM+QEqRg7/cXkLN7XpAOMHFFrjEAHZQt5ZLaOpQwlqKT1zDdAIyLo1FIOXTpRu9vGI1thPi/p3sP0djuE+X8xL5xZ/MIs4NqL9dG6pxKu/tHqYJ15iaGaWS4qvqAn5hzR0a4pd/jj1vKPOOE9rrJG0qD7zmeaB6+IvVBxoutfYjWPXd4Ml57D0Q3pyaIdjerklicTWSN2ksH6j/g2hlGC+dYttnys2JUwNdF0XT9mqDKbn/QBKtPdk0hyfNX+T0PCj49aMx6r4wn9uc7s8dpsNGNQtO7RjKol3zVgiHDGsGnPSoVSsA/erWJlbi/i0N+HN6yJTWzBOCO7lzvGPcu3Unb07yMe/cMzCsO7Nd5qHpLhz2bO7Kl5PpUOr6ofzxTj92a7I3zX17Oey5ctrFtD6DgrtvHCHdv2h6Jlc9JqCMuHGSK3pX7LypnCG2c0XegfHlHr/bnBMnO2F0dULuq0rs1ux5xQrh4NKyKlo3Bqm5nbeHGAWsApkfBU6qbr2oNxAlhrVxu9KUOwknoCuf4L6nNots3w5RlsAE1J/PPQ1q/wJG42Gn7Pby6Kv2geeyvSBG6TBZrVtefvVC5ckbwHQUwAvvf/MCFi5hd6HEGcMTtc9aj0INfrgrh77OgGa+NaXv639XAvf+SFnR3O/6ffvtapTshVtiW1GKo319u3F/vqXtaRm1X6y0YyfqqFtdVTUynbIfbKj9Z9OosHOQgM0WV8hwk3Pjc780Om4F/IPHkxkdDHaB45oRVaTaCbuvVxOzDH9/1RSX6yfQ+Vla0taNoNOF0Ac0XDG6QerbihYZ/mRFyj/LpNg97pwXSemeECsS/hQlO4W6E9aTCBIHHtStuWmh9OYPofvpxiZTXoKZGMAO1nSDhOWO6EA9TN+r3tOntfAzU89chxi44UvK5eVcW6jXLIh8VIreJYDtietVnl1oQvAGXY6hZcUC9X7Itdg/ucw4fLOQlP5N7OCHQwd5uvlrEhPoCjbCh/shugXssU2FsLm11hOLLId0gDK4rapsQadV96ExCl+NxzYFhNBrp4ARiZtyBjR3bcOg1ycbDdNyoRMJa2P7y+/g0+ob8G3Vqxm5XeX1xajev8f3JxajEJIknyDVLY8m/TEGGuXWxk91XTdf2XKhz3/7khO7aMAIPCwBIVSr6c3QQmpd7C0XQwFmRJRbaiIxAaUdRvc3mRJmFJes7jlC7r6wClaPgFiE0ELSSnov7XFf9bTJcYcWIthNb9ipWvcqH8gPEXB8026+ur2uytzARNM0hOo/MDZOKHOuqPPVgX080CrTfzxAQ3Fu7+4Qt06a/ZGkX78k6U+WJo83LaN3l7jQIQ975a6Drov7MZXKLkAsGA1xPxhV/0Zb1W/wlmxHZBM8GiWEuEKkdsL9WkiYczff4bNSjw5Qzk6tv8cLoVtgH2X3w2wO3cug/D7Br8ZcBrsd9HWsERwOkczsDuCL13CRdL0Qugrb9NVDpvpZ3z1KT541YLfDuOv+nRK6F3+G7gjutQT0QjKAhaT1Cr/+GHR5XX03IJFRXpwz+rYioIc05tmNfV8cQ621KgRSwTFD2wKFUO6yw14/D3kZloTisCIldNPTAfN+68nLc9qJp/9UumOWLTp1Sgvzb1CVjHNX7IqpPGtNk9GqltBazX/7JRL0vqD3U9hbCtNDX9vAnVRqsxZCQPwSKwlf2fAKUAkgsjlv6bIOIV8UwVz37++IAvbRKZzCz3iXvg1OgBBS/ZivEDoDuDMT5fi25h/uAd9uvZBCZ1YWhS7HGJiAUj1a0ZFAIYQGqt8JoK8l9ktQfan6Ay0kDQc3dD/dDiLk4xYgh67gZzyyg3sBNMGZQPjAUwhdgliACoEKQnpEZLlCB4MsXQj9rS2OkJ+U3qxqITSsyxov6EUARf+/gHDZp9n5PLBPyh71vYkRP/BWq0OwB7Ih36D6wchSg/xQxIBqaPLy+6c2zAdm5DI1ICnnJ4T6QU7pCTHaKbjUuGDGoOWZqdqg+0jzg+4E/mfcdLVo+pxs5iyE+sFeV0puEK250mnkZRXNXAj1g7h/TNIsy+L7yDMnsPr+B9TGa0g4FyNDAAAAAElFTkSuQmCC" alt="Toolset" /></Col>
                <Col className="visible"><img className="img-responsive" style={{width:175,height:160}} src="https://cdn-images-1.medium.com/max/1600/1*EKW3XazCN98jcVrlEP3H8g.png" alt="Toolset" /></Col>
                <Col className="visible"><img className="img-responsive" style={{width:175,height:160}} src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png" alt="Toolset" /></Col>
                <Col className="visible"><img className="img-responsive" style={{width:175,height:160}} src="https://pbs.twimg.com/profile_images/658653282550857728/X9ayMtPe_400x400.jpg" alt="Toolset" /></Col>
                <Col className="visible"><img className="img-responsive" style={{width:175,height:160}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/2000px-Antu_mongodb.svg.png" alt="Toolset" /></Col>
                <Col className="visible"><img className="img-responsive" style={{width:175,height:160}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boostrap_logo.svg/1200px-Boostrap_logo.svg.png" alt="Toolset" /></Col>
            </Row>       
        ]
        this.setState({slides});
    }

    render() {
        return(
            <section>
                <h2  className="text-primary"> My Toolset </h2>
                {this.state.slides.stack}
            </section>
        );
    }
}