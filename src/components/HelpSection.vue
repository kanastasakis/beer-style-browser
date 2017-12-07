<template>
  <div>
    <h1>Help section</h1>
    <div>
        <h4>Intensity Level Terminology:</h4>
        <p>Beer flavor attributes referenced in the beer style guidelines are often referenced in relative terms of intensity. These attributes can include bitterness,flavor, aroma, body, malt, sweetness, or others. In order of increasing intensity, the descriptions used include:</p>
        <ul class="collection">
            <li class="collection-item">None</li>
            <li class="collection-item">Very low</li>
            <li class="collection-item">Low</li>
            <li class="collection-item">Medium-low</li>
            <li class="collection-item">Medium</li>
            <li class="collection-item">Medium-high</li>
            <li class="collection-item">High</li>
            <li class="collection-item">Very high</li>
        </ul>
        <h5>An example of an intensity description for an attribute:</h5>
        <blockquote>
            <b>Perceived Malt Aroma & Flavor:</b> Medium residual malt sweetness should be present
        </blockquote>
    </div>
    <br/>
    <div>
        <h4>Color Ranges:</h4>
        <p>The American SRM (Standard Reference Method) and EBC (European Brewing Convention) of measuring beer color measure the intensity of a certain wave length of light. These numerical values do not always coincide with our visual perception of color lightness and darkness or hue. When in doubt the description of color has priority. In order from lightest descriptor to darkest descriptor:</p>
        <table class="striped">
            <thead>
                <tr>
                    <th>Color Description</th>
                    <th>SRM</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Very light</td>
                    <td>1-1.5</td>
                </tr>
                <tr>
                    <td>Straw</td>
                    <td>2-3</td>
                </tr>
                <tr>
                    <td>Pale</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Gold</td>
                    <td>5-6</td>
                </tr>
                <tr>
                    <td>Light amber</td>
                    <td>7</td>
                </tr>
                <tr>
                    <td>Amber</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>Medium amber</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>Copper/garnet</td>
                    <td>10-12</td>
                </tr>
                <tr>
                    <td>Light brown</td>
                    <td>13-15</td>
                </tr>
                <tr>
                    <td>Brown/Reddish brown/chestnut brown</td>
                    <td>16-17</td>
                </tr>
                <tr>
                    <td>Dark brown</td>
                    <td>18-24</td>
                </tr>
                <tr>
                    <td>Very dark</td>
                    <td>25-39</td>
                </tr>
                <tr>
                    <td>Black</td>
                    <td>40+</td>
                </tr>
            </tbody>
        </table>
    </div>
    <br/>
    <div>
        <h4>Bitterness:</h4>
        <p>In the beer world bitterness is analytically measured as “bittering units” or “international bitterness units.” The numerical value is a measure of a specific hop compound and will not consistently coincide with individual’s perception of bitterness intensity.</p>
        <ol>
            <li>Due to genetics and other differences, individuals will have varying sensitivity to bitterness. Some will sense high intensity bitterness, while others perceive no bitterness in the same beer. The descriptions of bitterness in these guidelines are inclined towards representing average sensitivity to bitterness.</li>
            <li>Other beer ingredients can contribute perception of bitterness to beer.</li>
            <li>The intensity and quality of hop flavor and aroma derived from oils, pellets, whole hops or other hop formats can greatly alter the perception of bitterness intensity.</li>
        </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'help-section'
}
</script>
