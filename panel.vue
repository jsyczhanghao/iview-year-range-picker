<template>
    <div :class="classes" @mousedown.prevent>
        <div :class="[prefixCls + '-sidebar']" v-if="shortcuts.length">
            <div
                :class="[prefixCls + '-shortcut']"
                v-for="shortcut in shortcuts"
                @click="handleShortcutClick(shortcut)">{{ shortcut.text }}</div>
        </div>
        <div :class="[prefixCls + '-body']">
            <div :class="[prefixCls + '-content', prefixCls + '-content-left']" v-show="!isTime">
                <div :class="[datePrefixCls + '-header']" v-show="currentView !== 'time'">
                    <span
                        :class="iconBtnCls('prev', '-double')"
                        @click="prevYear('left')"><Icon type="ios-arrow-left"></Icon></span>
                    <span
                        v-if="leftPickerTable === 'date-table'"
                        :class="iconBtnCls('prev')"
                        @click="prevMonth('left')"
                        v-show="currentView === 'date'"><Icon type="ios-arrow-left"></Icon></span>
                    <date-panel-label
                        :date-panel-label="leftDatePanelLabel"
                        :current-view="leftDatePanelView"
                        :date-prefix-cls="datePrefixCls"></date-panel-label>
                    <span
                        v-if="splitPanels || leftPickerTable !== 'date-table'"
                        :class="iconBtnCls('next', '-double')"
                        @click="nextYear('left')"><Icon type="ios-arrow-right"></Icon></span>
                    <span
                        v-if="splitPanels && leftPickerTable === 'date-table'"
                        :class="iconBtnCls('next')"
                        @click="nextMonth('left')"
                        v-show="currentView === 'date'"><Icon type="ios-arrow-right"></Icon></span>
                </div>
                <component
                    :is="leftPickerTable"
                    ref="leftYearTable"
                    v-if="currentView !== 'time'"
                    :table-date="leftPanelDate"
                    selection-mode="range"
                    :disabled-date="disabledDate"
                    :range-state="rangeState"
                    :show-week-numbers="showWeekNumbers"
                    :value="preSelecting.left ? [dates[0]] : dates"
                    @on-change-range="handleChangeRange"
                    @on-pick="panelPickerHandlers.left"
                    @on-pick-click="handlePickClick"
                ></component>
            </div>
        </div>
    </div>
</template>
<script>
    import RangeDatePickerPanel from 'iview/src/components/date-picker/panel/Date/date-range';

    export default {
        mixins: [RangeDatePickerPanel],

        computed: {
            classes(){
                return  `${this.prefixCls}-body-wrapper`;
            }
        }
    };
</script>