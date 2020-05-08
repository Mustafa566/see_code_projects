<template>
    <div class="verticalScroll">
        <div class="row ml-5 mt-5">
            <div class="col-md-2 col-sm-10 ml-5 sideBar darkBlueBackGround">
                <div class="sideBarInfo">
                    <h5 class="whiteText mt-2">Keyword:</h5>
                    <input type="text" class="form-control inputHeight">

                    <h5 class="whiteText mt-5">Platform:</h5>

                    <input type="checkbox" aria-label="Checkbox for following text input">
                    <label class="whiteText ml-2">Web</label><br>

                    <input type="checkbox" aria-label="Checkbox for following text input">
                    <label class="whiteText ml-2">Mobile app</label><br>

                    <input type="checkbox" aria-label="Checkbox for following text input">
                    <label class="whiteText ml-2">Desktop application</label><br>

                    <input type="checkbox" aria-label="Checkbox for following text input">
                    <label class="whiteText ml-2">Other</label><br>

                    <h5 class="whiteText mt-5">Programming Language:</h5>
                    <select class="select-standard">
                        <option value="all">Any</option> 
                        <option value="Angular js">Angular js</option> 
                        <option value="C">C</option>
                        <option value="C#">C#</option>
                        <option value="C++">C++</option>
                        <option value="CSS">CSS</option>
                        <option value="Go">Go</option>
                        <option value="HTML">HTML</option>
                        <option value="Java">Java</option>
                        <option value="Javascript">Javascript</option>
                        <option value="JRuby">JRuby</option>
                        <option value="Lua">Lua</option>
                        <option value="C">C</option>
                        <option value="Perl">Perl</option>
                        <option value="PHP">PHP</option>
                        <option value="Python">Python</option>
                        <option value="R">R</option>
                        <option value="React js">React js</option>
                        <option value="Ruby">Ruby</option>
                        <option value="SASS">SASS</option>
                        <option value="SQL">SQL</option>
                        <option value="Swift">Swift</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="VisualBasic">VisualBasic</option>
                        <option value="Vue js">Vue js</option>
                    </select>                 
                </div>
            </div>
            <div class="col-md-8 col-sm-10 ml-5">
                <div class="row">
                    <div class="col cardMain">
                        <div class="row mr-1 mt-1">
                            <div class="col">
                                <li class="text-success">Still on sale</li>
                            </div>
                            <p class="float-right">Date</p>
                        </div>
                        <div class="col ml-0">
                            <h5>Project name</h5>
                            <p>This is the project description</p>
                        </div>
                        <div class="bottomCard">
                            <span class="infoCard">fsdf</span>
                        </div>
                    </div>
                    <div class="col">
                        hhsd
                    </div>
                    <div class="col">
                        hhsd
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.sideBar {
    width: 150px;
    height: 100vh;
    border-radius: 30px;
}

.inputHeight {
    height: 30px;
}

.select-standard {
    width: 100%;
    border-width: 1px;
    border-color: #718096;
    font-size: .875rem;
    outline: 0;
    background-color: #fff;
    border-radius: .125rem;
}

.cardMain {
    border: 1px solid black;
    border-radius: 10px;
    height: 250px;
}

.infoCard {
    position:absolute;
    bottom: 0;
}
</style>

<script>
export default {
    
}
</script>