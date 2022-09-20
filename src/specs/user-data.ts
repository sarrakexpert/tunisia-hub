// Copyright 2021 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export let users :any= [];

const dev_users = [
    {
        id: `user`,
        alt: [
            { username: ``, password: `` },
            { username: ``, password: `` },
        ],
    },
];

const staging_users = [
    {
        id: `user`,
        alt: [
            { username: `Ned.Stark`, password: `Has!123456789` },
        ],
    },
    {
        id: `chefService`,
        alt: [
            { username: `olena.kushnir@ke`, password: `Calista!1234567` },
        ],
    },
    {
        id: `userDev`,
        alt: [
            { username: `feras.khoursheed@ke`, password: `Calista!1234567` },
        ],
    },
    {
        id: `userRelecteur`,
        alt: [
            { username: `M000011`, password: `Calista!123456`},
        ],
    },
    {
        id: `userChefsService`,
        alt: [
            { username: `M000026`, password: `Calista!123456`},
        ],
    },
    {
        id: `AssistantGesti`,
        alt: [
            { username: `AssistantGesti.Tester`, password: `Rules!123456` },
        ],
    },
    {
        id: `ExpertVisteur`,
        alt: [
            { username: `32999`, password: `Testpeg@123` },
        ],
    },
    {
        id: `ChefOrAdjointService`,
        alt: [
            { username: `ChefouAdjoint.Tester`, password: `Rules!123456` },
        ],
    },
    {
        id: `ReferentProduction`,
        alt: [
            { username: `testreferentsprod`, password: ` Calista!123456` },
        ],
    },
    {
        id: `ReferentSupport`,
        alt: [
            { username: `testreferentsupport`, password: `Has!123456` },
        ],
    },


];



export function getUsersPool(env: string) {
    //console.log(env);
    switch (env) {
        case `dev`:
            users = dev_users;
            break;
        case `stage`:
            users = staging_users;
            break;
        default:
            users = [
                {
                    id: `operator`,
                    alt: [{ username: `test.maker`, password: `Rules12345$` }],
                },
            ];
            break;
    }

    //console.log(users);
    return users;
}




export function getUrl(env: string) {
    let url = '';
    switch (env) {
        case `dev`:
            url = '';
            break;
        case `AssistantGestion`:
            url = 'https://has-cespi-stg1.pegacloud.net/prweb/app/SIC/7rnU_N5Vuvu_c3HLZbhte2Z42jsF4HVM*/!STANDARD?';
            break;
            case `AssistantGestion8`:
            url = 'https://has-cespi-stg1-clone.pegacloud.net/prweb/app/SIC_/7rnU_N5Vuvu_c3HLZbhte2Z42jsF4HVM*/!STANDARD?pzPostData=1919293713';
            break;
            case `dev`:
            url = '';
            break;
        case `hasPortail`:
            url = 'https://has-cespi-stg1.pegacloud.net/prweb/app/SIC/kXrGxfcwBK33sOAgpf5p3j9CU4bw8ar0*/!STANDARD?pyActivity=%40baseclass.pzProcessURLInWindow&pyPreActivity=Embed-PortalLayout.RedirectAndRun&ThreadName=OpenPortal_PortailCPOuAG&Location=pyActivity%3DData-Portal.ShowSelectedPortal%26portal%3DPortailCPOuAG%26Name%3D%20PortailCPOuAG%26pzSkinName%3D%26developer%3Dfalse%26ThreadName%3DOpenPortal_PortailCPOuAG%26launchPortal%3Dtrue&bPurgeTargetThread=true&target=popup&portalThreadName=STANDARD&portalName=Developer&pzHarnessID=HIDF98550B699468DA7FBD31BC912A927C9';
            break;
        case `hasPortail8`:
            url = 'https://has-cespi-stg1-clone.pegacloud.net/prweb/app/SIC_/6yVaPXfRPbQU2lDPjMh_E_oangspSaSe*/!STANDARD?pzPostData=-1795502367';
            break;
        case `stageDev8`:
                url = 'https://has-cespi-stg1-clone.pegacloud.net/prweb/app/SIC_/kXrGxfcwBK33sOAgpf5p3j9CU4bw8ar0*/!STANDARD?pyActivity=%40baseclass.pzProcessURLInWindow&pyPreActivity=Embed-PortalLayout.RedirectAndRun&ThreadName=OpenPortal_PortailCPOuAG&Location=pyActivity%3DData-Portal.ShowSelectedPortal%26portal%3DPortailCPOuAG%26Name%3D%20PortailCPOuAG%26pzSkinName%3D%26developer%3Dfalse%26ThreadName%3DOpenPortal_PortailCPOuAG%26launchPortal%3Dtrue&bPurgeTargetThread=true&target=popup&portalThreadName=STANDARD&portalName=Developer&pzHarnessID=HIDF43163C472D6836A657ECD35E141D880';
                break;
        case `stageDev`:
            url = `https://has-cespi-stg1.pegacloud.net/prweb/app/SIC/kXrGxfcwBK33sOAgpf5p3j9CU4bw8ar0*/!STANDARD?pyActivity=%40baseclass.pzProcessURLInWindow&pyPreActivity=Embed-PortalLayout.RedirectAndRun&ThreadName=OpenPortal_pyCaseWorker&Location=pyActivity%3DData-Portal.ShowSelectedPortal%26portal%3DpyCaseWorker%26Name%3D%20pyCaseWorker%26pzSkinName%3D%26developer%3Dfalse%26ThreadName%3DOpenPortal_pyCaseWorker%26launchPortal%3Dtrue&target=popup&portalThreadName=STANDARD&portalName=Developer&pzHarnessID=HID53E13074AC0CF8AA6EDDA83DAF2A6535`;
            break;
        case `stage`:
            url = 'https://has-cespi-stg1.pegacloud.net/prweb/app/SIC/6yVaPXfRPbTIucfkiYXAOm6o6JZy9iDD*/!STANDARD?pyActivity=%40baseclass.pzProcessURLInWindow&pyPreActivity=Embed-PortalLayout.RedirectAndRun&ThreadName=OpenPortal_pyCaseManager7&Location=pyActivity%3DData-Portal.ShowSelectedPortal%26portal%3DpyCaseManager7%26Name%3D%20pyCaseManager7%26pzSkinName%3D%26developer%3Dfalse%26ThreadName%3DOpenPortal_pyCaseManager7%26launchPortal%3Dtrue&bPurgeTargetThread=true&target=popup&portalThreadName=STANDARD&portalName=Developer&pzHarnessID=HID1E141ED9E805A06C6FA929657FCD7603';
            break;
        case `stageRelecteur`:
            url = `https://has-cespi-stg1.pegacloud.net/prweb/app/SIC/jo6YuWuR3I2_bD1V0ptn3A*/!STANDARD`;
            break;
        case `stageChefsService`:
            url = `https://has-cespi-stg1.pegacloud.net/prweb/app/SIC/UXREXBvDirY15Y4H77mY1ELTibiCcsOuwrdpnfHuTnM*/!STANDARD?&`;
            break;
            case `stageChefsService8`:
                url = `https://has-cespi-stg1.pegacloud.net/prweb/app/SIC/kXrGxfcwBK33sOAgpf5p3j9CU4bw8ar0*/!STANDARD?pyActivity=%40baseclass.pzProcessURLInWindow&pyPreActivity=Embed-PortalLayout.RedirectAndRun&ThreadName=OpenPortal_PortailCPOuAG&Location=pyActivity%3DData-Portal.ShowSelectedPortal%26portal%3DPortailCPOuAG%26Name%3D%20PortailCPOuAG%26pzSkinName%3D%26developer%3Dfalse%26ThreadName%3DOpenPortal_PortailCPOuAG%26launchPortal%3Dtrue&bPurgeTargetThread=true&target=popup&portalThreadName=STANDARD&portalName=Developer&pzHarnessID=HIDF2EFA338AF2D3E41DF3E6FBA6B5DDEB1`;
                break;
            case `stageChefsadjoint`:
            url = `https://has-cespi-stg1.pegacloud.net/prweb/app/SIC/-sPDjli2JlECD84cvMNZ8wxIe7urqtp8*/!STANDARD`;
            break;
            case `stageChefsadjoint8`:
            url = `https://has-cespi-stg1-clone.pegacloud.net/prweb/app/SIC_/UXREXBvDirY15Y4H77mY1ELTibiCcsOuwrdpnfHuTnM*/!STANDARD?pzPostData=-1001927681`;
            break;
        default:
            url = 'https://has-cespi-stg1.pegacloud.net/prweb/app/SIC/6yVaPXfRPbTIucfkiYXAOm6o6JZy9iDD*/!STANDARD?pyActivity=%40baseclass.pzProcessURLInWindow&pyPreActivity=Embed-PortalLayout.RedirectAndRun&ThreadName=OpenPortal_pyCaseManager7&Location=pyActivity%3DData-Portal.ShowSelectedPortal%26portal%3DpyCaseManager7%26Name%3D%20pyCaseManager7%26pzSkinName%3D%26developer%3Dfalse%26ThreadName%3DOpenPortal_pyCaseManager7%26launchPortal%3Dtrue&bPurgeTargetThread=true&target=popup&portalThreadName=STANDARD&portalName=Developer&pzHarnessID=HID1E141ED9E805A06C6FA929657FCD7603';
            break;

    }
    return url;
}

