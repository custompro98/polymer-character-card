<link rel="import" href="../../bower_components/polymer/polymer.html">
<link rel="import" href="../../bower_components/paper-header-panel/paper-header-panel.html">
<link rel="import" href="../../bower_components/iron-icons/iron-icons.html">
<link rel="import" href="../../bower_components/iron-icon/iron-icon.html">

<dom-module id="character-card">
    <link rel="import" type="css" href="character-card.css">

    <template>
        <paper-header-panel>
            <div class="paper-header" id="characterName" on-click="fullscreen">{{character.Name}}</div>
            <div class="content" id="characterStats">
                <div id="profilePic">
                </div>
                <div id="vitals">
                    <div class="trait">
                        <span class="category">Age: </span><span id="age">{{character.Age}}</span>
                    </div>
                    <div class="trait">
                        <span class="category">Height: </span><span id="height">{{character.Height}}</span>
                    </div>
                    <div class="trait">
                        <span class="category">Weight: </span><span id="weight">{{character.Weight}}</span>
                    </div>
                    <div class="trait">
                        <span class="category">Birthday: </span><span id="birthday">{{character.Birthday}}</span>
                    </div>
                </div>
                <div class="trait" id="tHobbies">
                    <span class="category">Hobbies: </span><span id="hobbies">{{character.Hobbies}}</span>
                </div>
                <div id="physical">
                    <div class="attribute">
                        <iron-icon icon="expand-less" direction="up" name="might" on-click="clickHandler"></iron-icon><br/>
                        (<span id="mightIndex">{{stats.MightIndex::value-changed}}</span>)<span class="category">Might: </span>{{stats.MightScore}}<span id="mightScore"></span><br/>
                        <iron-icon icon="expand-more" direction="down" name="might" on-click="clickHandler"></iron-icon>
                    </div>
                    <div class="attribute">
                        <iron-icon icon="expand-less" direction="up" name="speed" on-click="clickHandler"></iron-icon><br/>
                        (<span id="speedIndex">{{stats.SpeedIndex}}</span>)<span class="category">Speed: </span>{{stats.SpeedScore}}<span id="speedScore"></span><br/>
                        <iron-icon icon="expand-more" direction="down" name="speed" on-click="clickHandler"></iron-icon>
                    </div>
                </div>
                <div id="mental">
                    <div class="attribute">
                        <iron-icon icon="expand-less" direction="up" name="knowledge" on-click="clickHandler"></iron-icon><br/>
                        (<span id="knowledgeIndex">{{stats.KnowledgeIndex}}</span>)<span class="category">Knowledge: </span>{{stats.KnowledgeScore}}<span id="knowledgeScore"></span><br/>
                        <iron-icon icon="expand-more" direction="down" name="knowledge" on-click="clickHandler"></iron-icon>
                    </div>
                    <div class="attribute">
                        <iron-icon icon="expand-less" direction="up" name="sanity" on-click="clickHandler"></iron-icon><br/>
                        (<span id="sanityIndex">{{stats.SanityIndex}}</span>)<span class="category">Sanity: </span>{{stats.SanityScore}}<span id="sanityScore"></span><br/>
                        <iron-icon icon="expand-more" direction="down" name="sanity" on-click="clickHandler"></iron-icon>
                    </div>
                </div>
            </div>
        </paper-header-panel>
    </template>

    <script src="character-card.js"></script>
</dom-moduid
