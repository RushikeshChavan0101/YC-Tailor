import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 2,


  }

  images = [
    { img: "assets/images/sr1.jpg" },
    { img: "assets/images/s2.jpg" },
    { img: "assets/images/s3.jpg" },
    { img: "assets/images/s4.jpg" },
    { img: "assets/images/s5.jpg" },
    { img: "assets/images/s6.jpg" },
    { img: "assets/images/spr2.jpg" },
    { img: "assets/images/spr3.jpg" },
    { img: "assets/images/spr4.jpg" },
    { img: "assets/images/spr6.jpg" },
    { img: "assets/images/spr7.jpeg" },
    { img: "assets/images/spr8.jpeg" },

  ]


  verticalslide = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  texts: string[] = [
    `Welcome to [Yuvraj Tailors], your premier destination for exceptional custom tailoring services. 
   With a passion for impeccable craftsmanship and a commitment to customer satisfaction, we have been serving 
   discerning individuals with their clothing needs for [20] years.

   अपवादात्मक सानुकूल टेलरिंग सेवांसाठी आपले प्रमुख गंतव्य [टेलर्स बिझनेस नेम] मध्ये आपले स्वागत आहे. निर्दोष कारागिरीची उत्कट इच्छा 
   आणि ग्राहकांच्या समाधानासाठी वचनबद्धतेसह, आम्ही [20] वर्षांपासून विवेकी व्यक्तींना त्यांच्या कपड्यांच्या गरजा पूर्ण करत आहोत.`,

    `At [Yuvraj Tailors], we believe that every individual deserves clothing that not only fits 
   perfectly but also reflects their unique style and personality. Our team of highly skilled tailors and 
   designers are dedicated to bringing your vision to life, ensuring that each garment is tailored to perfection.
   
   [टेलर्स बिझनेस नेम] येथे, आमचा असा विश्वास आहे की प्रत्येक व्यक्ती केवळ उत्तम प्रकारे बसणारेच नाही तर त्यांची अनोखी शैली 
   आणि व्यक्तिमत्व देखील प्रतिबिंबित करणारे कपडे पात्र आहे. अत्यंत कुशल टेलर आणि डिझायनर्सची आमची टीम तुमची दृष्टी जिवंत करण्यासाठी 
   समर्पित आहे, प्रत्येक वस्त्र परिपूर्णतेनुसार तयार केले आहे याची खात्री करून.`,

    `From elegant suits and formal attire to casual wear and specialty garments, we offer a comprehensive range of tailoring 
services to cater to all your sartorial requirements. Whether you need a bespoke suit for a special occasion or
 alterations to your favorite dress, we take pride in delivering exceptional results that exceed your expectations.
 
 शोभिवंत सूट आणि औपचारिक पोशाखांपासून ते कॅज्युअल पोशाख आणि विशेष वस्त्रांपर्यंत, आम्ही तुमच्या सर्व विचित्र आवश्यकता पूर्ण करण्यासाठी टेलरिंग सेवांची
  विस्तृत श्रेणी ऑफर करतो. तुम्हाला एखाद्या खास प्रसंगासाठी बेस्पोक सूटची गरज असेल किंवा तुमच्या आवडत्या ड्रेसमध्ये बदल करण्याची गरज असेल, तुमच्या 
  अपेक्षेपेक्षा जास्त असाधारण परिणाम दिल्याबद्दल आम्हाला अभिमान वाटतो.`,

  `We understand that the essence of custom tailoring lies in the details. That's why we pay meticulous attention to every stitch, 
  ensuring that the fabrics, patterns, and finishes are of the highest quality. With a keen eye for design and a deep understanding 
  of the latest fashion trends, our team is well-equipped to transform your ideas into reality, creating garments that are truly one-of-a-kind.
  
  आम्हाला समजते की सानुकूल टेलरिंगचे सार तपशीलांमध्ये आहे. म्हणूनच आम्ही प्रत्येक शिलाईकडे बारकाईने लक्ष देतो, हे सुनिश्चित करून की फॅब्रिक्स, नमुने 
  आणि फिनिश हे उच्च दर्जाचे आहेत. डिझाईनकडे कटाक्षाने लक्ष ठेवून आणि नवीनतम फॅशन ट्रेंडची सखोल माहिती घेऊन, आमची टीम तुमच्या कल्पनांना 
  वास्तवात रुपांतरित करण्यासाठी, खरोखरच एक प्रकारचे कपडे तयार करण्यासाठी सुसज्ज आहे.`,

  `At [Tailor's Business Name], we believe in fostering long-lasting relationships with our clients. We value open 
  communication and collaborate closely with you throughout the tailoring process, taking your preferences into account
   and offering expert advice when needed. Our goal is to provide an exceptional experience that is both personalized 
   and enjoyable, ensuring that you walk away with garments that not only fit perfectly but also make you feel confident
    and stylish.
    
    [टेलर्स बिझनेस नेम] वर, आमचा आमच्या क्लायंटसोबत दीर्घकाळ टिकणारे संबंध वाढवण्यात विश्वास आहे. आम्ही खुल्या संवादाला महत्त्व देतो आणि संपूर्ण 
    टेलरिंग प्रक्रियेदरम्यान तुमच्याशी जवळून सहयोग करतो, तुमची प्राधान्ये विचारात घेतो आणि आवश्यकतेनुसार तज्ञांचा सल्ला देतो. वैयक्तिकृत आणि 
    आनंददायक असा अपवादात्मक अनुभव प्रदान करणे हे आमचे उद्दिष्ट आहे, हे सुनिश्चित करून तुम्ही कपड्यांसह चालत आहात जे केवळ उत्तम प्रकारे बसत
     नाहीत तर तुम्हाला आत्मविश्वास आणि स्टायलिश देखील वाटतात.`,


    `We invite you to visit our [location] showroom and experience the art of custom tailoring firsthand. Let us guide 
    you through the process, from fabric selection to measurements, and witness the transformation of your ideas into 
    impeccably tailored garments. Discover the joy of wearing clothing that is made just for you at 
    [Tailor's Business Name].
    
    आम्ही तुम्हाला आमच्या [स्थान] शोरूमला भेट देण्यासाठी आमंत्रित करतो आणि स्वतःच सानुकूल टेलरिंगची कला अनुभवतो. फॅब्रिकच्या निवडीपासून ते 
    मोजमापांपर्यंतच्या प्रक्रियेत आम्‍ही तुम्‍हाला मार्गदर्शन करू आणि तुमच्‍या कल्पनेचे निर्दोषपणे तयार केलेल्या कपड्यांमध्‍ये होणार्‍या परिवर्तनाचे साक्षीदार होऊ या. 
    फक्त तुमच्यासाठी बनवलेले कपडे घालण्याचा आनंद [टेलर्स बिझनेस नेम] येथे शोधा.`,
  ]


  section4slide={
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    atuplaySpeed:2000,
  }
  secfour: string[] =[
    `This tailor website has saved me so much time and effort. With a busy schedule, I no longer have to visit multiple
     stores or deal with pushy salespeople. I can effortlessly design and order custom-made clothing from the comfort 
     of my home. The delivery is prompt, and the packaging is impeccable. It's the ultimate convenience.`,

     `This tailor website is a game-changer! It's incredibly user-friendly, making it easy for me to browse through 
     various designs and fabrics. I love how I can customize every aspect of my clothing and visualize the final product 
     before making a purchase. It has completely revolutionized my tailoring experience.`,

     `"I've been using this tailor website for all my clothing needs, and I couldn't be happier. The range of options 
     is extensive, allowing me to create unique and personalized outfits. The website's intuitive interface and detailed 
     measurement guides ensure that I always get a perfect fit. The quality of the garments is exceptional, 
     and the customer service is top-notch.`,

     `As someone who values sustainability, I appreciate how this tailor website offers eco-friendly fabrics and ethical 
     production practices. It's refreshing to see a company that prioritizes both style and sustainability. The website's
      commitment to transparency and providing detailed information about their materials and manufacturing process is
       commendable.`,

       `I recently used this tailor website for my wedding attire, and I couldn't be happier with the results. 
       The website offers a wide range of elegant designs, and the customization options allowed me to create a 
       truly unique ensemble. The garments were expertly tailored and fit me perfectly. It added an extra touch of 
       luxury to my special day.`
  ]
}