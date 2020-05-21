// function to generate markdown for README
 
function generateMarkdown(data) {
  //destructing object into variables
  const {title,description, install,usage,license,contribute,test,github,email}=data;
  // local variables
  let badgeUrl = '';
  let licenseText = '';
  let licenseUrl = '';
  let githubUrl = 'https://github.com/' + github ;
  
  //Populates local variables according to user selection.
  if (license=='cco'){
    badgeUrl = '![CCO Logo](/assets/images/cco.png)';
    licenseText = 'A Creative Commons (CC) license is one of several public copyright licenses that enable the free distribution of an otherwise copyrighted "work". A CC license is used when an author wants to give other people the right to share, use, and build upon a work that they (the author) have created. CC provides an author flexibility (for example, they might choose to allow only non-commercial uses of a given work) and protects the people who use or redistribute an authors work from concerns of copyright infringement as long as they abide by the conditions that are specified in the license by which the author distributes the work.';
    licenseUrl = '[Wikipedia](https://en.wikipedia.org/wiki/Creative_Commons_license#Zero_/_public_domain)';
    
  } else if (license =='MIT' ){
    badgeUrl = '![CCO Logo](./assets/images/mit.png)';
    licenseText = 'The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT) in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.';
    licenseUrl = '[Wikipedia](https://en.wikipedia.org/wiki/MIT_License)';
  }
  else if (license =='GPL'){
    badgeUrl = '![CCO Logo](./assets/images/gpl.png)';
    licenseText = 'The GNU General Public License (GNU GPL or GPL) is a series of widely used free software licenses that guarantee end users the freedom to run, study, share, and modify the software.[7] The licenses were originally written by Richard Stallman, former head of the Free Software Foundation (FSF), for the GNU Project, and grant the recipients of a computer program the rights of the Free Software Definition.[8] The GPL series are all copyleft licenses, which means that any derivative work must be distributed under the same or equivalent license terms. This is in distinction to permissive software licenses, of which the BSD licenses and the MIT License are widely used less-restrictive examples. GPL was the first copyleft license for general use.';
    licenseUrl = '[Wikipedia](https://en.wikipedia.org/wiki/GNU_General_Public_License)';
  }
  else if (license == 'Apache' ){
    badgeUrl = '![CCO Logo](./assets/images/apache.png)';
    licenseText = 'The Apache License is a permissive free software license written by the Apache Software Foundation (ASF).[5] It allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for royalties. The ASF and its projects release their software products under the Apache License. The license is also used by many non-ASF projects.';
    licenseUrl = '[Wikipedia](https://en.wikipedia.org/wiki/Apache_License)';
  }
  else if (license == 'MPL' ){
    badgeUrl = '![CCO Logo](./assets/images/mpl.png)';
    licenseText = 'The Mozilla Public License (MPL) is a free and open source software license developed and maintained by the Mozilla Foundation. It is a weak copyleft license, characterized as a middle ground between permissive free software licenses and the GNU General Public License (GPL), that seeks to balance the concerns of proprietary and open source developers. As such, it allows re-licensing. MPL software can thus be converted into a copyleft license such as the GPL, or to a proprietary license.';
    licenseUrl = '[Wikipedia](https://en.wikipedia.org/wiki/Mozilla_Public_License)'
  }
  else if (license == 'AGPL' ){
    badgeUrl = '![AGPL Logo](./assets/images/agpl.png)';
    licenseText = 'The GNU Affero General Public License is a modified version of the ordinary GNU GPL version 3. It has one added requirement: if you run a modified program on a server and let other users communicate with it there, your server must also allow them to download the source code corresponding to the modified version running there.The purpose of the GNU Affero GPL is to prevent a problem that affects developers of free programs that are often used on servers.';
    licenseUrl = '[Wikipedia](https://en.wikipedia.org/wiki/GNU_Affero_General_Public_License)';
  }
  //Returns string for readme file.
  return`
  ${badgeUrl}
  # ${title}
  ### Table of Contents
  1. [Program Description.](#description)
  2. [Program Installation.](#installation)
  3. [Program Usage.](#usage)
  4. [Licensing.](#license)
  5. [How to Contribute.](#contribute)
  6. [How to Test.](#test)
  7. [Question?](#quests)
  
  ## Program Description:
  ${description}
  
  ## Installation:
  ${install}
  
  ## Program Usage:
  ${usage}
  
  ## License Type: 
  ${licenseText}
  ${licenseUrl}
  
  ## How to contribute:
  ${contribute}
  
  ## How to test:
  ${test}
  
  ## Questions
  [Github repositry](${githubUrl})
  If you have any questions please [email me](mailto:${email}). 
     
  `
}
  module.exports = generateMarkdown