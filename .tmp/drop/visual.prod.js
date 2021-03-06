/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var wordTreeAttempt3C14192913314A23B36A6BF6843C7DD5;
            (function (wordTreeAttempt3C14192913314A23B36A6BF6843C7DD5) {
                var Visual = (function () {
                    function Visual(options) {
                        console.log('Visual constructor', options);
                        this.target = options.element;
                        this.updateCount = 0;
                    }
                    Visual.prototype.update = function (options) {
                        console.log('Visual update', options);
                        this.target.innerHTML = "<p>Update count: <em>" + (this.updateCount++) + "</em></p>";
                    };
                    return Visual;
                }());
                wordTreeAttempt3C14192913314A23B36A6BF6843C7DD5.Visual = Visual;
            })(wordTreeAttempt3C14192913314A23B36A6BF6843C7DD5 = visual.wordTreeAttempt3C14192913314A23B36A6BF6843C7DD5 || (visual.wordTreeAttempt3C14192913314A23B36A6BF6843C7DD5 = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var plugins;
        (function (plugins) {
            plugins.wordTreeAttempt3C14192913314A23B36A6BF6843C7DD5_DEBUG = {
                name: 'wordTreeAttempt3C14192913314A23B36A6BF6843C7DD5_DEBUG',
                displayName: 'WordTreeAttempt',
                class: 'Visual',
                version: '1.0.0',
                apiVersion: '1.6.0',
                create: function (options) { return new powerbi.extensibility.visual.wordTreeAttempt3C14192913314A23B36A6BF6843C7DD5.Visual(options); },
                custom: true
            };
        })(plugins = visuals.plugins || (visuals.plugins = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
//# sourceMappingURL=visual.js.map